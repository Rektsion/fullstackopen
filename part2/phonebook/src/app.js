import React, {useState, useEffect} from 'react'
import Form from "./components/form"
import Persons from "./components/person"
import Filter from "./components/filter"
import './index.css'
import noteService from "./components/services/number"

const Notification = ({name}) => {
  if (name === null) {
    return null
  }

  return (
    <div className="success">
      {name}
    </div>
  )
}

const Error = ({error}) => {
  if (error === null) {
    return null
  }

  return (
    <div className="error">
      {error}
    </div>
  )
}


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState("")
  const [ success, setSuccess] = useState(null)
  const [ error, setError] = useState(null)
  useEffect(() => {
      noteService.getNumber()
                  .then(initial => {
                      setPersons(initial)
                  })
  },[])

  const Addpeople = (event) =>{
    event.preventDefault()
    const search = persons.filter((person) => person.name === newName)
    if (search.length !== 0) {
      if (window.confirm(`${newName} is already in the phonebook, replace the new number with new one`)) {
        const changed = {...search[0], number: newNumber}
        noteService.update(changed.id ,changed)
                    .then(response => {
                      setPersons(persons.map(person => person.id !== changed.id ? person : response))
                    })
                    .catch(error => {
                      setError(`Information of ${newName} has already been removed from the server.` )
                      setTimeout(() => {
                        setError(null)
                      },5000)
                    })
      }
    }
    else {
      const person = {
        name: newName,
        number: newNumber
      }
      noteService.postNumber(person)
                .then(response => {
                  setPersons(persons.concat(response))
                })
      setSuccess(`Added ${newName}`)

      setTimeout(() => {
        setSuccess(null)
      }, 5000)

      setNewName('')
      setNewNumber('')

    }
  }

  const Handlechange = (event) =>{
    setNewName(event.target.value)
  }

const HandleNumber = (event) => {
  setNewNumber(event.target.value)
}



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification name={success} />
      <Error error={error} />
      <Filter array={persons}/>
      <h3>Add a new</h3>
      <Form Addpeople={Addpeople} newName={newName} Handlechange={Handlechange} newNumber={newNumber} HandleNumber={HandleNumber} />
      <h2>Numbers</h2>
      <Persons array={persons} set={setPersons} />
    </div>
  )
}


export default App


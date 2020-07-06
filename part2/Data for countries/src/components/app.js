import React, {useState, useEffect} from 'react'
import Form from "./form"
import axios from "axios"


const App = () => {
  const [array, setArray] = useState([])

  useEffect(response => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setArray(response.data)
      },[])
  })
  return (
    <div>
      <Form array={array} />
    </div>
  )
}


export default App


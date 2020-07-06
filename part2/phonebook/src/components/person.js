import React from "react"
import noteService from "./services/number"



const Persons = ({array, set}) => {

const del = (id, name) => {
    if (window.confirm(`Delete ${name}`)){
        noteService.wipe(id)
        const cool = array.filter(x => x.id !== id)
        set(cool)
    }
}

    return (
        <>
        {array.map((person) => <p key={person.id}>{person.name} {person.number} <button onClick={() => del(person.id, person.name)}>delete</button></p>)}
        </>
    )
}

export default Persons;
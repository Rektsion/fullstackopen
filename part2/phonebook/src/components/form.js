import React from "react"

const Form = ({Addpeople,newName,Handlechange,newNumber,HandleNumber}) => {
  return (
    <form onSubmit={Addpeople}>
        <div>
          name: <input 
          value = {newName}
          onChange = {Handlechange}
          />
        </div>
        <div>
          number: <input 
          value = {newNumber}
          onChange = {HandleNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default Form;


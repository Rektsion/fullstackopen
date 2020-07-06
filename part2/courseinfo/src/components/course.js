import React from "react"

const Course = ({course}) => {
  return (
    <>
      {course.map(course => 
      <div>
        <h1>
          {course.name}
        </h1>
        {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        <h3>total of {course.parts.reduce((total, part) => (total + part.exercises),0)} exercises</h3>
      </div>
      )}
    </>
  )
}


export default Course
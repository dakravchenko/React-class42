import React from 'react'

export default function Person({person}) {
  return (
    <div>
      {person !== null?
      <>
      <li>{person.name.last}</li>
      <li>{person.name.first}</li>
      <li>{person.email}</li>
      </>:
      <div>Nothing to render</div>}
    </div>
  )
}

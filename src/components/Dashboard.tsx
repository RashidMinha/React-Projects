import React, { useState } from 'react'

export default function Dashboard({Name , age , occupation, color}:any) {
  return (
    <div>
       <h2>{Name}</h2>
       <h2>{age}</h2>
       <p style={color={color}}>{occupation}</p>
       <p>hello Developers</p>
    </div>

  )
}
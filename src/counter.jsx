import React from 'react'
import { useState,useEffect } from 'react'

function counter() {
    const [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1>Iam your header</h1>
    </div>
  )
}

export default counter

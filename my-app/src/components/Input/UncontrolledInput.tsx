import {useState} from "react";

export const UncontrolledInput = () =>{
  console.log('UncontrolledInput')
  let[value, setValue] = useState('')
  return(
      <input value={value} onChange={(e)=>{setValue(e.currentTarget.value)}}/>
  )
} 
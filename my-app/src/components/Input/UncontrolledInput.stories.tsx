import {UncontrolledInput} from "./UncontrolledInput";
import {useState} from "react";

export default {
  title: 'UncontrolledInputWithValue',
  component: UncontrolledInput
}

export const UncontrolledAndUncontrolledInputWithValue = () => {
  const[value, setValue]=useState('')
  return(<>
        <UncontrolledInput/>
        <input onChange={(e)=>{setValue(e.currentTarget.value)}}/> - {value}

  </>
  )
}

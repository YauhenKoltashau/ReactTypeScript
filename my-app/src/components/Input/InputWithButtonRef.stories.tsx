import {useRef, useState} from "react";


export default {
    title: 'UncontrolledInputByButton'

}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const[value, setValue] = useState('')
    // return(<>
    //         <input id={"inputId"}/> <button onClick={()=>{
    //             const el = document.getElementById("inputId") as HTMLInputElement
    //         setValue(el.value)
    //     }}
    //         >save</button> - actual value: {value}
    //
    //     </>)
    const inputRef = useRef<HTMLInputElement>(null)
    return (<>
        <input ref={inputRef} /><button onClick={()=>{setValue((inputRef.current as HTMLInputElement).value)}}>save</button> - actual value: {value}
    </>)
}

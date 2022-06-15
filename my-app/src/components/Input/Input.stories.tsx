import {useState} from "react";


export default {
    title: 'Input',

}

export const ControlledInput = () => {
    /** callBack can use when the value is hard code for show that onChange is working
     * */
    // const callBack = action("want to change")
    const[value, setValue] = useState('')
        return(
            <input value={value} onChange={(e)=>setValue(e.currentTarget.value)}/>
        )

}
export const ControlledCheckbox = () => {
    const[value, setValue] = useState(true)
        return(
            <input type="checkbox" checked={value} onChange={(e)=>setValue(e.currentTarget.checked)}/>
        )

}
export const ControlledSelect = () => {
    const[value, setValue] = useState<string|undefined>(undefined)
        return(
            <select value={value} onChange={(e)=>setValue(e.currentTarget.value)}>
                <option>none</option>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Moscow</option>
                <option value={'3'}>Kiev</option>
            </select>
            )


}
import {UsersSelect} from "./Select";
import {useState} from "react";

export default {
    title: 'Select'
}

export const SelectUser = () => {
    let[ selectValue, setSelectValue] = useState<string | undefined>('2')
    // const callBack = (action('select worked'))
    return(
        <UsersSelect users={[
            {id: '1', title: 'Yauhen'},
            {id: '2', title: 'Pavel'},
            {id: '3', title: 'Rustam'},
            {id: '4', title: 'Iryna'},
        ]} value={selectValue} callBack={setSelectValue}/>

    )
}
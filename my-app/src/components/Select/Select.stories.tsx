import {UsersSelect} from "./Select";
import {useState} from "react";

export default {
    title: 'Select'
}

export const SelectUser = () => {
    let[ selectValue, setSelectValue] = useState<string | undefined>(undefined)
    // const callBack = (action('select worked'))
    return(
        <UsersSelect users={[
            {id: '1', title: 'Yauhen', value: 'developer'},
            {id: '2', title: 'Pavel', value: 'tester'},
            {id: '3', title: 'Rustam', value: 'developer'},
            {id: '4', title: 'Iryna', value: 'housewife'},
        ]} value={selectValue} callBack={setSelectValue}/>

    )
}
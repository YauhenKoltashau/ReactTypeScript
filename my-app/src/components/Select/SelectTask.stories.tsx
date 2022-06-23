import {ForSelect} from "./Select";
import {useState} from "react";

export default {
    title: 'SelectCountries'
}

export const SelectCountries = () => {
    let [selectValue, setSelectValue] = useState<string | undefined>('2')
    // const callBack = (action('select worked'))
    return (
        <ForSelect users={[]} countries={[
            {
                id: '1', title: 'Belarus', cities: [
                    {id: '1', title: 'Minsk'},
                    {id: '2', title: 'Mogilev'},
                    {id: '3', title: 'Brest'},
                    {id: '4', title: 'Byhov'}]
            },
            {
                id: '2', title: 'Ukraine', cities: [
                    {id: '1', title: 'Kiev'},
                    {id: '2', title: 'Chernigov'},
                    {id: '3', title: 'lviv'},
                    {id: '4', title: 'Odessa'}]
            },
            {
                id: '3', title: 'Russia', cities: [
                    {id: '1', title: 'Minsk'},
                    {id: '2', title: 'Mogilev'},
                    {id: '3', title: 'Brest'},
                    {id: '4', title: 'Byhov'}]
            },
        ]} value={selectValue} callBack={setSelectValue}/>

    )
}
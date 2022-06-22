import React, {useCallback, useMemo, useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating} from "./components/Rating/Rating";
import {ValuePropsType} from "./components/Star/Star";
import {OnOff, OnOffType} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledInput} from "./components/Input/UncontrolledInput";
import {Input} from "./components/Input/Input";
import {UsersSelect} from "./components/Select/Select";

export const App = React.memo( () => {
    let[value, setValue] = useState<ValuePropsType>(0)
    let[on, setOn] = useState<OnOffType>(false)
    let[collapsed, setCollapsed]=useState(true)
    let[inputValue, setInputValue] = useState('')
    let[ selectValue, setSelectValue] = useState<string|undefined>('2')
    const setCollapsedCallback = useCallback(()=>setCollapsed(!collapsed),[collapsed])
    const messageCallBack = useCallback((v)=>alert(`user with value ${v} must have be happy`),[])



    return (
        <div className={"App"}>

            {/*<AppTitle title={"This is APP component"}/>*/}
            {/*<AppTitle title={"My friends"}/>*/}
            {/*<UncontrolledAccordion title={"Menu"}/>*/}
            {/*<UncontrolledAccordion title={"Users"}/>*/}

            {/*<Accordion title={"Menu"} collapsed={collapsed} setCollapsed={()=>setCollapsed(!collapsed)} items={[]} callBack={()=>{}}/>*/}
            <Accordion title={"Users"} collapsed={collapsed} setCollapsed={setCollapsedCallback} items={[{id: '1', title:'Yauhen', value: 'developer' }, {id: '2', title:'Pavel', value: 'tester' }, {id: '3', title:'Rustam', value: 'developer' }]} callBack={messageCallBack}/>
            {/*<UncontrolledRating/>*/}
            {/*<Rating callBack={setValue} name={value} />*/}


            <OnOff callBack={setOn} on={on}/>
            <TestComponent/>
            {/*<UncontrolledOnOff/>*/}
            {/*<Input value={inputValue} callBack={setInputValue}/>*/}
            {/*<UncontrolledInput/>*/}
            {/*<br/>*/}
            {/*<UsersSelect users={[*/}
            {/*    {id: '1', title: 'Yauhen'},*/}
            {/*    {id: '2', title: 'Pavel'},*/}
            {/*    {id: '3', title: 'Rustam'},*/}
            {/*    {id: '4', title: 'Iryna'},*/}
            {/*]} value={selectValue} callBack={setSelectValue}/>*/}


            </div>

    );
})
type AppTitlePropsType = {
    title: string
}
const AppTitle: React.FC<AppTitlePropsType> = (props) => {
    return <div>{props.title}</div>
}


const TestComponent =React.memo( () => {
    console.log('TestComponent')
    return(
        <div>It is a dump component</div>
    )
})
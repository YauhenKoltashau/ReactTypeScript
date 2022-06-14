import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating} from "./components/Rating/Rating";
import {ValuePropsType} from "./components/Star/Star";
import {OnOff, OnOffType} from "./components/OnOff/OnOff";
import {Accordion} from "./components/Accordion/Accordion";

const App = () => {
    let[value, setValue] = useState<ValuePropsType>(0)
    let[on, setOn] = useState<OnOffType>(false)
    let[collapsed, setCollapsed]=useState(true)


    return (
        <div className={"App"}>

            <AppTitle title={"This is APP component"}/>
            <AppTitle title={"My friends"}/>
            <UncontrolledAccordion title={"Menu"}/>
            <UncontrolledAccordion title={"Users"}/>

            <Accordion title={"Menu"} collapsed={collapsed} setCollapsed={()=>setCollapsed(!collapsed)}/>
            <Accordion title={"Users"} collapsed={collapsed} setCollapsed={()=>setCollapsed(!collapsed)}/>
            <UncontrolledRating/>
            <Rating callBack={setValue} name={value} />


            <OnOff callBack={setOn} on={on}/>
            <UncontrolledOnOff/>


            </div>

    );
}
type AppTitlePropsType = {
    title: string
}
const AppTitle: React.FC<AppTitlePropsType> = (props) => {
    return <div>{props.title}</div>
}

export default App;

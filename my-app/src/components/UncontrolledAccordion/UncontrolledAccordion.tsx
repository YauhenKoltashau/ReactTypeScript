import React, {useState} from "react";
import {AccordionTitle} from "./UncontrolledAccordionTitle";
import {AccordionBody} from "./UncontrolledAccordionBody";

type UncontrolledAccordionPropsType = {
    title: string

}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
    console.log('UnControlledAccordion rendered')
    let [collapsed, setCollapsed] = useState(true)
    const onClickTitleHandler = (title: string) => {
        if (title)
        {setCollapsed(!collapsed)}


    }

    return <div>
        {<AccordionTitle title={props.title} onclickHandler={onClickTitleHandler}/>}
        {!collapsed && <AccordionBody/>}
    </div>

}




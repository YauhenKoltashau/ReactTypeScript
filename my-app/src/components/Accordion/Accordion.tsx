import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed:()=> void

}

export const Accordion = (props: AccordionPropsType) => {


        return <div>
            {<AccordionTitle title={props.title} collapsed={props.collapsed} callBack={props.setCollapsed}/>}
            {!props.collapsed && <AccordionBody/>}

        </div>

    }




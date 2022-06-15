import React from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
export type itemType = {
    id: string
    title: string
    value: any
}
type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed:()=> void
    items: itemType[]
    callBack: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {

        return <div>
            {<AccordionTitle title={props.title} collapsed={props.collapsed} callBack={props.setCollapsed}/>}
            {!props.collapsed && <AccordionBody items={props.items} callBack={props.callBack}/>}

        </div>

    }




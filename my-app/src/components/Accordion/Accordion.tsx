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

export const AccordionWithMemo = (props: AccordionPropsType) => {

    console.log('Accordion')
    // console.log(typeof props)
        return <div>
            {<AccordionTitle title={props.title} collapsed={props.collapsed} callBack={props.setCollapsed}/>}
            {!props.collapsed && <AccordionBody items={props.items} callBack={props.callBack}/>}

        </div>

    }
export const Accordion = React.memo(AccordionWithMemo)
// export const Accordion = React.memo(AccordionWithMemo,areEqual)

function areEqual(prevProps:AccordionPropsType, nextProps:AccordionPropsType) {

    console.log(prevProps === nextProps)
    return prevProps === nextProps
}


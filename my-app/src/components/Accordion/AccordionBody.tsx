import React from "react";
import {itemType} from "./Accordion";
type AccordionBodyPropsType = {
    items: itemType[]
    callBack: (value: any) => void
}
export const AccordionBody =React.memo( (props:AccordionBodyPropsType) => {
    console.log('Body')
    return (
        <div>
            <ul>
                {props.items.map((i)=> <li key={i.id} onClick={()=>props.callBack(i.value)}>{i.title}</li>)}
            </ul>
        </div>
    )
})
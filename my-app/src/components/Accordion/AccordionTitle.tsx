import React from "react";
type AccordionTitlePropsType = {
    title: string
    callBack: () => void
    collapsed:boolean

}

export const AccordionTitle = (props: AccordionTitlePropsType) => {

    return (
        <div>
            <h3 onClick={props.callBack}>{props.title}</h3>
        </div>
    )
}
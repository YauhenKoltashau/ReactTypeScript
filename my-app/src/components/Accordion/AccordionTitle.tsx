import React from "react";
type AccordionTitlePropsType = {
    title: string
    callBack: () => void
    collapsed:boolean

}

export const AccordionTitle =React.memo( (props: AccordionTitlePropsType) => {

    return (
        <div>
            <h3 onClick={props.callBack}>{props.title}</h3>
        </div>
    )
})
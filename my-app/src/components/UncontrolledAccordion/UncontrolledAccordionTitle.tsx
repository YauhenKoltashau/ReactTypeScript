import React from "react";

type AccordionTitlePropsType = {
    title: string
    onclickHandler: (title: string)=> void
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    const onclickHandler = () => {
        props.onclickHandler(props.title)}
    return (
        <div onClick={onclickHandler}>
            <h3>{props.title}</h3>
        </div>
    )
}
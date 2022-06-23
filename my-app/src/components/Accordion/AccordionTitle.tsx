import React from "react";
type AccordionTitlePropsType = {
    title: string
    callBack?: () => void

}

export const AccordionTitle =React.memo( (props: AccordionTitlePropsType) => {
    console.log('Title')
    return (
        <div>
            <h3
                onClick={props.callBack}
            >{props.title}</h3>
        </div>
    )
})
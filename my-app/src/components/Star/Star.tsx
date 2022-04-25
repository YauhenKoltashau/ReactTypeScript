import React from "react";

export type ValuePropsType = 0 | 1 | 2 | 3 | 4 | 5
export type StarPropsType = {
    name: ValuePropsType
    selected: boolean
    onClickChangeRating: (name: ValuePropsType) => void
}

export const Star = (props: StarPropsType) => {
    const onclickHandler = () => {
        props.onClickChangeRating(props.name)

    }
    return (
        <span onClick={onclickHandler}>{props.selected ? <b>star </b> : 'star '}</span>
    )
}



import React from "react";
import {Star, ValuePropsType} from "../Star/Star";

type RatingPropsType = {
    name: ValuePropsType
    callBack: (name: ValuePropsType) => void
}

export const Rating = (props: RatingPropsType) => {

    return (
        <div>
            <Star selected={props.name > 0} onClickChangeRating={props.callBack} name={1}/>
            <Star selected={props.name > 1} onClickChangeRating={props.callBack} name={2}/>
            <Star selected={props.name > 2} onClickChangeRating={props.callBack} name={3}/>
            <Star selected={props.name > 3} onClickChangeRating={props.callBack} name={4}/>
            <Star selected={props.name > 4} onClickChangeRating={props.callBack} name={5}/>

        </div>
    )
}
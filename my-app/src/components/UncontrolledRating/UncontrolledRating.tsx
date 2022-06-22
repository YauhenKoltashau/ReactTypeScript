import React, {useState} from "react";
import {Star, ValuePropsType} from "../Star/Star";


export const UncontrolledRating = () => {
    console.log('UnControlledRating rendered')
    let [value, setValue] = useState<ValuePropsType>(0)
    const onClickChangeRating = (name:ValuePropsType) => {
    setValue(name)
    }

    return (
        <div>
            <Star selected={value > 0} onClickChangeRating={onClickChangeRating} name={1}/>
            <Star selected={value > 1} onClickChangeRating={onClickChangeRating} name={2}/>
            <Star selected={value > 2} onClickChangeRating={onClickChangeRating} name={3}/>
            <Star selected={value > 3} onClickChangeRating={onClickChangeRating} name={4}/>
            <Star selected={value > 4} onClickChangeRating={onClickChangeRating} name={5}/>


        </div>
    )
}
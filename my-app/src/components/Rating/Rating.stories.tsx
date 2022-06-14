import React, {useState} from 'react';
import {Rating} from "./Rating";
import {ValuePropsType} from "../Star/Star";

export default {
    title: 'Rating stories',
    component: Rating,
}

export const EmptyStars = () => <Rating name={0} callBack={()=>{}}/>
export const Rating1 = () => <Rating name={1} callBack={()=>{}}/>
export const Rating2 = () => <Rating name={2} callBack={()=>{}}/>
export const Rating3 = () => <Rating name={3} callBack={()=>{}}/>
export const Rating4 = () => <Rating name={4} callBack={()=>{}}/>
export const Rating5 = () => <Rating name={5} callBack={()=>{}}/>
export const RatingChanging = ()=> {
    const[rating, setRating]= useState<ValuePropsType>(0)
    return <Rating name={rating} callBack={setRating}/>
}

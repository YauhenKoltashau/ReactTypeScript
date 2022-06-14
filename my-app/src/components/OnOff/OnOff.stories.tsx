import React, {useState} from 'react';
import {OnOff, OnOffType} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
}
const callBack = action("on or off is clicked")
export const OnIs = () => <OnOff on={true} callBack={callBack}/>
export const OffIs = () => <OnOff on={false} callBack={callBack}/>

export const OnChanging = ()=> {
    const[onValue, setOnValue]= useState<OnOffType>(false)
    return <OnOff on={onValue} callBack={setOnValue}/>
}
import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}
const callBack = action("accordion mode event fired")
export const Collapsed = () => <Accordion title={'menu'} collapsed={true} setCollapsed={callBack}/>
export const UnCollapsed = () => <Accordion title={'menu'} collapsed={false} setCollapsed={callBack}/>

export const OnChanging = ()=> {
    let[value, setValue]= useState<boolean>(false)
    return <Accordion title={'menu'} collapsed={value} setCollapsed={()=>setValue(!value)}/>
}
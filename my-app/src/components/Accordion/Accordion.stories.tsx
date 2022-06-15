import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
}
const callBack = action("accordion mode event fired")
export const Collapsed = () => <Accordion title={'menu'} collapsed={true} setCollapsed={callBack} items={[]} callBack={action('accordion wants to show value')}/>
export const UnCollapsed = () => <Accordion title={'menu'} collapsed={false} setCollapsed={callBack} items={[{id: '1', title:'Yauhen', value: 'developer' }, {id: '2', title:'Pavel', value: 'tester' }, {id: '3', title:'Rustam', value: 'developer' }]} callBack={action('accordion wants to show value')}/>

export const OnChanging = ()=> {
    let[value, setValue]= useState<boolean>(false)
    return <Accordion title={'users'} collapsed={value} setCollapsed={()=>setValue(!value)} items={[{id: '1', title:'Yauhen', value: 'developer' }, {id: '2', title:'Pavel', value: 'tester' }, {id: '3', title:'Rustam', value: 'developer' }]} callBack={(v)=>alert(`user with value ${v} must have be happy`)} />
}
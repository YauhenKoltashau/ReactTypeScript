import React, {useEffect, useState} from "react"

export default {
    title: 'UseEffect demo'
}


export const SimpleExample = () => {
    console.log('SimpleExample')


    const [counter, setCounter] = useState(1)
    const [fakeCounter, setFakeCounter] = useState(1)
    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()

    })
    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()

    }, [])
    useEffect(() => {
        console.log('useEffect first render and counter changed')
        document.title = counter.toString()
        // api.getUsers().then()
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = "User"

    }, [counter])

    return <>
        <button onClick={() => setCounter(counter + 1)}>counter: {counter}</button>
        <button onClick={() => setFakeCounter(fakeCounter + 1)}>fakeCounter: {fakeCounter}</button>


    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [counter, setCounter] = useState(1)
    const [fakeCounter, setFakeCounter] = useState(1)
    useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
    }, [counter])
    return <>
        <button onClick={() => setCounter(counter + 1)}>counter: {counter}</button>
        <button onClick={() => setFakeCounter(fakeCounter + 1)}>fakeCounter: {fakeCounter}</button>


    </>
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        setInterval(()=>{
           return setCounter((state)=>state + 1)
        },1000)
    },[])
    return <>
        {counter}
    </>
}
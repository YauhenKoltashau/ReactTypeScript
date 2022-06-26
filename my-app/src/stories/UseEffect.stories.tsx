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
        const setTimeoutId = setTimeout(() => {
            document.title = counter.toString()
        }, 1000)
        return () => {
            clearTimeout(setTimeoutId)
        }
    }, [counter])
    return <>
        <button onClick={() => setCounter(counter + 1)}>counter: {counter}</button>
        <button onClick={() => setFakeCounter(fakeCounter + 1)}>fakeCounter: {fakeCounter}</button>


    </>
}
export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(0)
    console.log(counter)
    useEffect(() => {
        const IntervalId = setInterval(()=>{
           return setCounter(counter + 1)
        },1000)
        return ()=>{
            clearInterval(IntervalId)
        }
    },[counter])
    return <>
        {counter}
    </>
}
export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(0)
    console.log("ResetEffectExample " + counter)
    useEffect(() => {
        console.log("Effect occured "+ counter)
        return () => {
            console.log("Effect is reseted "+ counter)
        }
    },[counter])
    return <>
        Hello, counter: {counter} <button onClick={()=> {
        setCounter(counter + 1)
    }}>+</button>
    </>
}
export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log("ResetEffectExample "+ text)
    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
                setText(text + e.key)
            }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }
    },[text])
    return <>
       Typed: {text}

    </>
}
export const SetTimeoutExampleIfClousedBefore = () => {
    const [text, setText] = useState('')
    console.log("ResetEffectExample "+ text)
    useEffect(() => {
        const setTimeOutId = setTimeout(()=>{
            console.log('3 sec passed')
        },3000)



        return () => {
            clearTimeout(setTimeOutId)
        }
    },[text])
    return <>
       Typed: {text}

    </>
}
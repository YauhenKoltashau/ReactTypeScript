import React, {useMemo, useState} from "react"

export default {
    title: 'UseState demo'
}

function generateData() {
    console.log('generateData')
    let dificultExpression = 1
    return dificultExpression
}

export const Example1 = () => {


    const [counter, setCounter] = useState(generateData)
    const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(changer)}>{counter}</button>


    </>
}
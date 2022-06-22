import React, {useMemo, useState} from "react"

export default {
    title: 'UseMemo'
}

export const Example1 = () => {


    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1
    resultA = useMemo(()=>{
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fakeValue = 0
            while (fakeValue < 10000000) {
                fakeValue++
                let someValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    },[a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => {
            setA(+e.currentTarget.value)
        }}/>
        <input value={b} onChange={(e) => {
            setB(+e.currentTarget.value)
        }}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>


    </>
}
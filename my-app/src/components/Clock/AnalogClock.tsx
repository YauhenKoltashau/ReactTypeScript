import React, {useEffect, useState} from "react";
import c from "./AnalogClock.module.css";

type PropsType = {}
export const AnalogClock: React.FC<PropsType> = (props) => {
    const getCorrectNumber = (number: number) => number < 10 ? '0' + number : number
    const [date, setDate] = useState(new Date())
    useEffect(() => {

        const IntervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(IntervalId)
        }

    }, [])
    return(
        <>
            <div className={c.clock}>
                <div
                    className={c.hour_hand}
                    style={{
                        transform: `rotateZ(${date.getHours() * 30}deg)`
                    }}
                />
                <div
                    className="min_hand"
                    style={{
                        transform: `rotateZ(${date.getMinutes() * 6}deg)`
                    }}
                />
                <div
                    className={c.sec_hand}
                    style={{
                        transform: `rotateZ(${date.getSeconds() * 6}deg)`
                    }}
                />
                <span className={c.twelve}>12</span>
                <span className={c.one}>1</span>
                <span className={c.two}>2</span>
                <span className={c.three}>3</span>
                <span className={c.four}>4</span>
                <span className={c.five}>5</span>
                <span className={c.six}>6</span>
                <span className={c.seven}>7</span>
                <span className={c.eight}>8</span>
                <span className={c.nine}>9</span>
                <span className={c.ten}>10</span>
                <span className={c.eleven}>11</span>
            </div>
        </>
        )

}
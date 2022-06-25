import React,{useState} from "react";
import {AnalogClock} from "./AnalogClock";
import {Clock} from "./Clock";


export default {
    title: 'Clock'
}
export const ClockExample = () => {
    const [mode, setMode] = useState(true)
    const switchClock = () => {
        setMode(!mode)
    }


    return (
        <>
            <div>
                <button onClick={switchClock}>SWITCH</button>
            </div>

            {mode
                ?<Clock/>
                :<AnalogClock/>
                            }
        </>

    )
}
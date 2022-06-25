import React, {useEffect, useState} from "react";
import styles from "./Clock.module.css";
type PropsType = {

}
export const Clock:React.FC<PropsType> = (props) => {
  const getCorrectNumber = (number:number)=>number<10?'0'+number:number
  const [date, setDate] = useState(new Date())
  useEffect(()=>{

    const IntervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(IntervalId)
    }

  },[])
  return <>
         <div className={styles.clock}>

          <span>{getCorrectNumber(date.getHours())}</span>
          :
          <span>{getCorrectNumber(date.getMinutes())}</span>
          :
          <span>{getCorrectNumber(date.getSeconds())}</span>
        </div>

  </>

}
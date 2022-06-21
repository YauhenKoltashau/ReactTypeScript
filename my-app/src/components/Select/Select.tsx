import {useState} from "react";
import styles from './select.module.css'
// import styles from '/select.module.css'

type UserType = {
    id: string
    title: string
}
type UsersSelectPropsType = {
    users: UserType[]
    value: any
    callBack: (value: any) => void
}

export const UsersSelect = (props: UsersSelectPropsType) => {
    console.log(props.value)
    const [menu, setMenu] = useState(false)
    const setUser = () => {
        setMenu(!menu)
    }
    const setNewUser = (id: string) => {
      props.callBack(id)
        setMenu(false)
    }
    return (
        <div>


            {/*<select value={props.value} onChange={(e) => props.callBack(e.currentTarget.value)}>*/}
            {/*    {props.users.map((u) => {*/}
            {/*        return (*/}
            {/*            <option value={u.title}>{u.title}</option>*/}
            {/*        )*/}
            {/*    })}*/}


            {/*</select>*/}
            {/*{props.value == undefined*/}
            {/*    ? <div className={styles.select} onClick={(e)=>setUser(e.currentTarget.click)}></div>*/}


                {menu
                    ? <AllPersons users={props.users} callBack={setNewUser}/>
                    : <div className={styles.select}>
                        {props.users.filter((u)=>u.id===props.value).map((u)=>(
                        <div key={u.id} onClick={setUser}>{u.title}        </div>
                    ))

                        }

                    </div>}



        </div>


    )
// }


}

type AllPersonsPropsType = {
    users: UserType[]
    callBack:(id: string)=>void
}
const AllPersons = (props: AllPersonsPropsType) => {
const[currentPosition, setCurrentPosition] = useState<null|string>(null)
    const onMouseEnter = (id:string) => {
        setCurrentPosition(id)
    }
    return (
        <div>
            {props.users.map((u)=>{
                return(
                    <div
                        key={u.id}
                        onClick={()=>props.callBack(u.id)}
                        className={currentPosition == u.id?styles.blueBack: styles.select }
                        onMouseEnter={()=>{onMouseEnter(u.id)}}>{u.title}</div>
                )
            })}
        </div>

    )


}
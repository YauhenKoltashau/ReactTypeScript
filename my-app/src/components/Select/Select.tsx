import {useState, KeyboardEvent, useReducer} from "react";
import styles from './select.module.css'
import {ActiveSelectCreator, SelectReducer, SetItemIdCreator} from "./SelectReducer";

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
    console.log('Select rendered')

    const [state, dispatch] = useReducer(SelectReducer, {
        activeSelect: false,
        itemId: ''
    })

    // const [activeDiv, setActiveDiv] = useState<number | undefined>(undefined)


    const setUser = (id: string) => {
        dispatch(ActiveSelectCreator())
        setIdForItem(id)
    }
    const setIdForItem = (id: string) => {
        dispatch(SetItemIdCreator(id))
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log(e.key)
        if (e.key === "ArrowDown") {
            console.log('ArrowDown')
        } else if (e.key === "ArrowUp") {
            console.log('ArrowUp')
        }


    }
    const setNewUser = (id: string) => {
        props.callBack(id)
        dispatch(ActiveSelectCreator())
    }
    return (
        <div className={styles.main}>


            {/*<select value={props.value} onChange={(e) => props.callBack(e.currentTarget.value)}>*/}
            {/*    {props.users.map((u) => {*/}
            {/*        return (*/}
            {/*            <option value={u.title}>{u.title}</option>*/}
            {/*        )*/}
            {/*    })}*/}


            {/*</select>*/}
            {/*{props.value == undefined*/}
            {/*    ? <div className={styles.select} onClick={()=>setUser(e.currentTarget.click)}></div>*/}


            {state.activeSelect
                ? <>
                    <div className={styles.select}>
                        {props.users.filter((u) => u.id === props.value).map((u) => (
                            <div key={u.id} onClick={() => setUser(u.id)}>{u.title}        </div>
                        ))}
                    </div>
                    <br/>
                    <AllPersons users={props.users} onCLickCallBack={setNewUser} onPressCallBack={onKeyPressHandler}
                                currentId={state.itemId}/>

                </>

                : <div className={styles.select}>
                    {props.users.filter((u) => u.id === props.value).map((u) => (
                        <div key={u.id} onClick={() => setUser(u.id)}>{u.title}        </div>
                    ))

                    }

                </div>}


        </div>


    )
// }


}

type AllPersonsPropsType = {
    users: UserType[]
    onCLickCallBack: (id: string) => void
    onPressCallBack: (e: KeyboardEvent<HTMLDivElement>) => void
    currentId: string
}
const AllPersons = (props: AllPersonsPropsType) => {

    const [currentPosition, setCurrentPosition] = useState<null | string>(props.currentId)
    const onMouseEnter = (id: string) => {
        setCurrentPosition(id)
    }
    const onPressCallBack = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === "Enter"|| e.key === "Escape"){
            if (currentPosition!==null){
                props.onCLickCallBack(currentPosition)
            }
        }
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            for (let i = 0; i < props.users.length; i++) {
                if (currentPosition == props.users[i].id) {
                    if (e.key === "ArrowUp") {
                        if (props.users[i - 1]) {
                            setCurrentPosition(props.users[i - 1].id)
                            break
                        } else break

                    } else {
                        if (props.users[i + 1]) {
                            setCurrentPosition(props.users[i + 1].id)
                            break
                        } else break

                    }
                }

            }
        }

    }


    return (
        <div className={styles.menuSelect} tabIndex={0.1} onKeyUp={(e) => {
            onPressCallBack(e)
        }}>
            {props.users.map((u) => {
                return (
                    <div
                        key={u.id}
                        onClick={() => props.onCLickCallBack(u.id)}
                        className={currentPosition == u.id ? styles.blueBack : styles.item}
                        onMouseEnter={() => {
                            onMouseEnter(u.id)
                        }}
                    >{u.title}</div>

                )
            })}
        </div>

    )


}
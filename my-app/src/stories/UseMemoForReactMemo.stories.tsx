import React, {useMemo, useState} from "react"

export default {
    title: 'UseMemoForReact'
}


type UsersBeforePropsType = {
    users: string[]
}
const UsersBefore = (props:UsersBeforePropsType ) => {
    return(
        <>
            {props.users.map(u =>
                <div>{u}</div>
            )}
        </>
    )

}

const Users = React.memo(UsersBefore)

export const UseMemoForReact = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Yauhen', 'Pavel', 'Rustam','Igor'])
    const addUser = () => {
      return setUsers([...users,'Irina'+ new Date().getTime()])
    }
    const newArray = useMemo(()=>{
        return users.filter(u=>u.toLowerCase().indexOf('a') > -1)},[users])
    return(
        <>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={()=>addUser()}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )


}


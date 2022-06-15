
type UserType = {
    id: string
    title: string
    value: any
}
type UsersSelectPropsType = {
    users: UserType[]
    value: any
    callBack: (value: any) => void
}

export const UsersSelect = (props:UsersSelectPropsType) => {

    return(
        <select value={props.value} onChange={(e)=>props.callBack(e.currentTarget.value)}>
            {props.users.map((u)=>{
                return(
                    <option value={u.title}>{u.title}</option>
                )
            })}


        </select>

    )
}
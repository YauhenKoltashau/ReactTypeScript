export type InputPropsType = {
    value:string
    callBack: (e:string)=>void
}
export const Input = (props:InputPropsType) => <input value={props.value} onChange={(e)=>{props.callBack(e.currentTarget.value)}}/>
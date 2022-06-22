export type SelectActionType = ActiveSelectCreatorType | SetItemIdCreatorType

export type ActiveSelectCreatorType = ReturnType<typeof ActiveSelectCreator>
export type SetItemIdCreatorType = ReturnType<typeof SetItemIdCreator>

export type SelectStateType = {
    activeSelect: boolean
    itemId: string
}
const initialState: SelectStateType = {
    activeSelect: false,
    itemId: '',

}

export const ActiveSelectCreator = () => ({type: 'SET-SELECT'}as const)

 export const SetItemIdCreator = (id: string) => ({
    type: 'SET-ITEM-ID',
     id
 }as const)
export const SelectReducer = (state=initialState,action: SelectActionType):SelectStateType => {
    switch (action.type) {
        case 'SET-SELECT':
            return {...state,activeSelect: !state.activeSelect}
        case "SET-ITEM-ID":
            return {...state,itemId:action.id}


    }
    return state
}
import React, {useCallback, useMemo, useState} from "react"

export default {
    title: 'Books'
}
type BooksType = string[]
export const Books = () => {
    const [books, setBooks] = useState<BooksType>(['HTML', 'CSS', 'JS', 'REACT'])
    const [counter, setCounter] = useState(5)

    const addBook = () => {
       let newBooks = [...books, 'Angular']
        setBooks(newBooks)
    }
    const memoizedBook = useMemo(()=>{
        return addBook
    },[books])

    const memoizedBook2 = useCallback(()=>{addBook
    },[books])
    return <>
    <Book addBook={memoizedBook2}/>
        <button onClick={()=>{setCounter(counter+1)}}>{counter}</button>
    </>
}


type BookSecretPropsType = {
    addBook: ()=> void
}

const BookSecret = (props: BookSecretPropsType) => {
    console.log('BookSecret')
    return(
        <>
            <button onClick={props.addBook}>Add Book</button>
        </>
    )
}
const Book = React.memo(BookSecret)
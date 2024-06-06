import { Stack } from "@mui/material"
import{type Book as TypeBook} from '../types'
import {SingleBook} from './SingleBook'

interface Props{
    library: TypeBook[]
    onBooks: (id:string) => void
}

export const ReadedLibrary:React.FC<Props> = ({library, onBooks} ) =>{
    return (
        <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            useFlexGap flexWrap="wrap"
            justifyContent={'center'}
        >
            {library.map(({book})=>{
                if(book.isReaded)
                    return (
                        <SingleBook cover={book.cover} ISBN={book.ISBN} key={book.ISBN} onBooks={onBooks} action={'remove'}/>
                    )
            })}
        </Stack>
    )
}
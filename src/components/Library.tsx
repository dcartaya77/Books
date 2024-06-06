import { Stack } from "@mui/material"
import{type Book as TypeBook} from '../types'
import {SingleBook} from './SingleBook'

interface Props{
    library: TypeBook[]
    genreBook: string
    rate: number
    onBooks: (ISBN:string) => void
}

export const Library:React.FC<Props> = ({library, genreBook, rate=1200, onBooks}) =>{
    return (
        <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4, lg:4 }}
            useFlexGap flexWrap="wrap"
            justifyContent={'center'}
        >
            {library.map(({book})=>{
                if((book.genre === genreBook || genreBook==="Todos") && (book.isReaded==null || book.isReaded===false) && (book.pages <= rate))
                return (
                    <SingleBook cover={book.cover} ISBN={book.ISBN} key={book.ISBN} onBooks={onBooks} action={'add'} pages={0} />
                )
            })}
        </Stack>
    )
}
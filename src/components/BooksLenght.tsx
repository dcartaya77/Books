import { Stack, Typography } from "@mui/material";
import { type Book as TypeBook } from "../types";

interface Props {
    booksList: TypeBook[];
}

export const BooksLenght: React.FC<Props> = ({ booksList }) => {
    const totalBooks = booksList.length;
    const lenghtBooks = booksList.filter(({ book }) => book.isReaded === true);
    const countReadBooks = lenghtBooks.length;
    return (
        <Stack
            direction={{ sm: "column" }}
            sx={{ marginBottom: "30px", paddingLeft: "32px" }}
        >
            <Typography variant="h3" component="h1" textAlign={"left"}>
                {totalBooks - countReadBooks} libros disponibles
            </Typography>
            <Typography variant="h5" component="h1" textAlign={"left"}>
                {countReadBooks} en la lista de lectura
            </Typography>
        </Stack>
    );
};

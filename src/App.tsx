import { useEffect, useState } from "react";
import getBooks from "./services/getBooks";
import { Book } from "./types";
import { Library } from "./components/Library";
import { BooksLenght } from "./components/BooksLenght";
import { Grid, Typography } from "@mui/material";
import { ReadedLibrary } from "./components/ReadedLibrary";
import { SelectFilter } from "./components/SelectFilter";
import { Rate } from "./components/Rate";

const App = (): JSX.Element => {
    const ALL_CATEGORIES = "Todos";
    const [library, setLibrary] = useState<Book[]>([]);
    const [genreBook, setGenreBook] = useState<string>(ALL_CATEGORIES);
    const [rate, setRate] = useState<number>(1200);

    const addReadedBooks = (id:string): void => {
        const newList = structuredClone(library);
        const indexBook = newList.findIndex(
            ({ book: { ISBN } }) => ISBN === id
        );
        let infoBook = newList[indexBook];
        infoBook.book.isReaded = true;
        newList[indexBook] = infoBook;
        setLibrary(newList);
        localStorage.setItem("books", JSON.stringify(newList));
    };
    const removeReadedBooks = (id: string) => {
        const newList = structuredClone(library);
        const indexBook = newList.findIndex(
            ({ book: { ISBN } }) => ISBN === id
        );
        let infoBook = newList[indexBook];
        infoBook.book.isReaded = false;
        newList[indexBook] = infoBook;
        setLibrary(newList);
        localStorage.setItem("books", JSON.stringify(newList));
    };
    const handleChange = (genreBook: string) => {
        setGenreBook(genreBook);
    };
    const handleFilterByRate = (rateFilter: number) => {
        setRate(rateFilter);
    };
    useEffect(() => {
        if (localStorage.getItem("books"))
            setLibrary(JSON.parse(localStorage.getItem("books") || '""'));
        else {
            getBooks().then((books) => setLibrary(books));
        }
    }, []);

    return (
        <Grid container spacing={2} direction={{ md: "row" }}>
            <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
                <BooksLenght booksList={library} />
                <Rate rate={rate} onChange={handleFilterByRate} />
                <SelectFilter
                    genreBook={genreBook}
                    handleChange={handleChange}
                />
                <Library
                    library={library}
                    onBooks={addReadedBooks}
                    rate={rate}
                    genreBook={genreBook}
                />
            </Grid>
            <Grid
                item
                xs={12}
                lg={4}
                xl={4}
                md={6}
                sm={12}
                style={{ backgroundColor: "#333" }}
            >
                <Typography variant="h3" component="h1" textAlign={"center"}>
                    Lista de Lectura
                </Typography>
                <ReadedLibrary library={library} onBooks={removeReadedBooks} />
            </Grid>
        </Grid>
    );
};

export default App;

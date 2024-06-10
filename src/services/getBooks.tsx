export default function getBooks() {
    return fetch("https://dcartaya77.github.io/Books/books.json")
        .then((resp) => resp.json())
        .then((response) => {
            const { library } = response;
            localStorage.setItem("books", JSON.stringify(library));
            return library;
        });
}

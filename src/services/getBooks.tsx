
export default function getBooks(){
  return fetch('http://localhost:5173/books.json')
    .then(resp=>resp.json())
    .then(response=>{
        const {library} = response
        localStorage.setItem('books', JSON.stringify(library))
        return library
    })
}
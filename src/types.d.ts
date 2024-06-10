export interface Book {
  book: InfoBook
}
export interface InfoBook{
  title?: string
  pages: number
  genre?: string
  cover: string
  synopsis?: string
  year?: number
  ISBN: string
  author?: Author
  isReaded?: boolean
}

export interface Author {
  name: string
  otherBooks: string[]
}

export type PickISBN = Pick<InfoBook, 'ISBN'>;
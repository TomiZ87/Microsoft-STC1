export type Book = {
    id: number
    name: string
    author: string[]
    genre: string[]
    published: number
    publisher: string
    origin_country: string
    pages: number
}

export type Book_Short = {
    id: number
    name: string
    author: string[]
    genre: string[]
}
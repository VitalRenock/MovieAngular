import { Person } from "./person";

export interface Movie {
    id?: number
    title?: string
    description?: string
    releaseYear?: number
    realisator?: Person
    scenarist?: Person
    actors?: Person[]
}

// export interface Movie {
//     id: number
//     title: string
//     description: string
//     releaseYear: number
//     realisator: Person
//     scenarist: Person
//     actors: Person[]
// }
import Movie from "./Movie";

interface User {
    id: number;
    name: string;
    age: number;
    myList: Movie[]
}

export default User;
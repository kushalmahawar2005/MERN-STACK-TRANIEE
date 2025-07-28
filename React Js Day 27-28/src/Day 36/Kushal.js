import React from 'react'

export default function Kushal() {

//     let fruits = ['Apple', 'Mango', 'Bannana', 'Orange', 'Grappes']
//     return ( 
//         <span>
//             <ul>
//                 {
//                     fruits.map((fruit,index) => (
//                         <li key = {index}>{fruit}</li>
//                     ))
//                 }

//             </ul>
//         </span>
//     );
// }
const movies = [
    {title : 'Iception', year : 2010},
    {title : 'Rana Naidu' , year: 2001},
    {title : 'Saiyara' , year : 2025},
    {title : "Mahaavtar Narshimha Bhagwan", year : 2025},
]
return (
    <>
    <h1>My Fav Movies</h1>
    <ul>
        {
            movies.map((movie, index) => (
                <li key = {index}>{movie.title} - {movie.year}</li>
            ))
        }
    </ul>
    
    
    </>

);
}
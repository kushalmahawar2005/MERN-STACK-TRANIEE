// import React, {useState, useEffect } from 'react';

// function Update() {
//     const [second, setSecond] =useState(0);

//     useEffect(() => {
//         const Timer = setInterval(() => {
//             setSecond((prevseconds) => prevseconds + 1);
//         }, 1000);

//         return () => clearInterval(Timer);
//     }, []);

//     return (
//         <>
//         <h1>Seconds : {second}</h1>
//         </>
//     );
// }

// export default Update;


import React, {useState , useEffect} from 'react'

function Update() {
    const [second , setSecond] = useState(0);

    useEffect(() => {
        const Timer = setInterval(() => {
            setSecond((previousSecond) => previousSecond +  1);
        }, 1000);
        
        return () => clearInterval(Timer);
    }, []);
    return (
        <>
            <h1>Second : {second}</h1>
        </>
    );
}

export default Update;
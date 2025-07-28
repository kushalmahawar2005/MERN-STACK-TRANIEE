//Example of useState

import React , {useState} from 'react';

export default function Dev() {
    const [count , setCount] = useState(0);

    return (
        <>
            <h1>Counters</h1>
            <p>count is : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        
        </>
    );
}
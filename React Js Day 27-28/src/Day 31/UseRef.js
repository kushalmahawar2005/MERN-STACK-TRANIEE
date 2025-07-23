import React, {useRef , useState } from 'react';

export default function UseRef() {
    const clickCounterRef = useRef(0);
    const [renderCount , setRenderCount] = useState(0);

    const handleClick = () => {
        clickCounterRef.current += 1;
        console.log(`button clicked ${clickCounterRef.current} times`);
    };


    const reRender = () => setRenderCount(renderCount + 1);

    return (
        <div>
            <h1>Using useRef for Mutable Values</h1>
            <button onClick = {handleClick} >Click Me</button>
            <button onClick = {reRender}>Re-render</button>
            <p>Click count (in console only):{clickCounterRef.current }</p>
            <p>Render count : {renderCount}</p>
        </div>
    );
}



// import React, { useRef } from 'react';

// export default function UseRef() {
//     const inputRef = useRef(null);

//    const handleFocous = () => {
//     inputRef.current.focus();
//    };



//    return (
//     <div>
//         <h1>Accessing DOM Element with useRef</h1>
//         <input ref = {inputRef} type = 'text' placeholder='click button to focous' />
//         <button onClick = {handleFocous}>Focous Input</button>
//     </div>
//    );
// }
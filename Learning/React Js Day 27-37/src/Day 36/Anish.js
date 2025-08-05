//Effect Hook 

import React , {useState , useEffect, use} from "react";

export default function Anish() {
    const [second, setSecond] = useState(0);
    
    useEffect(() => {
        const Timer = setInterval(() =>{
            setSecond((previous) => previous + 1);
        }, 1000);

        return () => clearInterval(Timer);
    }, []);
    
    return (
        <>
            <h1>Timer : {second}</h1>
            
        
        </>
    );
}
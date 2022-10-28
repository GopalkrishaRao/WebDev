import { useState } from "react";

function Count(){
    const [count, setCount] = useState(10)
    return(

        <>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count + 1 )}>Increase  </button>
        <button onClick={()=>setCount (count-1)}>Decrease </button>

        </>

    )
};

export default Count;
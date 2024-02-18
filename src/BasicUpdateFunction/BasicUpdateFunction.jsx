
// updater function = a function passed as argument to setState() usually 
//                     ex. setYear(arrow function)
//                     Allow for safe updates based on the previous sate
//                     Used with multiple state updates and asynchronous functions
//                     Good practice to use updater functions.


import React, { useState } from "react"


export default function BasicUpdateFunction() {
    const [count, setCount] = useState(0)


    function increment() {
        setCount(c => c + 1);        
    }

    function decrement() {
        setCount(c => c - 1);        
    }

    function reset() {
        setCount(c => c = 0);
    }


    return (
        <>

            <p>Count {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>


        </>
    )
}


import { useState } from "react"

function CounterComponent() {

    const [counter, setCounter] = useState(0)

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(counter - 1)}>
                -
            </button>

            <button onClick={() => setCounter(0)}>
                Reset
            </button>

            <button onClick={() => setCounter(counter + 1)}>
                +
            </button>

        </>
    )

}


export default CounterComponent
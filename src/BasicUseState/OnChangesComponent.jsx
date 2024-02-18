

import { useState } from "react"

function OnChangeComponent() {
    const [name, setName] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <input value={name} onChange={handleNameChange} ></input>
            <p>Name: {name}</p>
        </>

    )


}


export default OnChangeComponent
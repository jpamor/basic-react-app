


function BasicClickEvent() {
    const handleClick = () => console.log("OUCH!")

    const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    const handleClickEvent = (e) => e.target.textContent = "OUCH!";


    return (<>
        <button onClick={handleClick}>Click Me</button>

        <button onClick={() => handleClick2("jCode")}>Click Me</button>

        <button onClick={(e) => handleClickEvent(e)}>Click Me</button>
    </>)


}

export default BasicClickEvent
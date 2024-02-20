import { useState } from "react"


export default function UpdateArrays() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood() {
        // get value
        const newFood = document.getElementById("foodInput").value;
        //reset
        document.getElementById("foodInput").value = "";


        // setFoods([["Apple", "Orange", "Banana"], newFood]);


        setFoods([...foods, newFood]);


    }

    return (
        <>
            <h2>List of Food</h2>

            <ul>
                {foods.map((food, index) => <li key={index}>{food}</li>)}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood} >Add Food</button>

        </>
    )

}
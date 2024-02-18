import { useState } from "react"



export default function UpdateArrayObject() {

    const [cars, setCars] = useState([]);

    const [carYear, setCarYear] = useState(new Date().getFullYear());

    const [carMake, setCarMake] = useState("");

    const [carModel, setCarModel] = useState("")

    function handleAddChange() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel,
        }

        setCars(c => [...c, newCar])
    }

    function hanleCarYearChage(e) {
        setCarYear(e.target.value);
    }

    function handleCarMakeChange(e) {
        setCarMake(e.target.value);
    }

    function handleCarModelChange(e) {
        setCarModel(e.target.value);
    }
    
    return (
        <>
            <h2>List of car objects</h2>
            <ul>
                {cars.map((car, key) =>
                    <li key={key}>{car.year} {car.make} {car.model}</li>

                )}
            </ul >

            <input type="number" id="carYear" value={carYear} onChange={hanleCarYearChage}></input><br />
            <input type="text" id="carMake" value={carMake} onChange={handleCarMakeChange}></input><br />
            <input type="text" id="carModel" value={carModel} onChange={handleCarModelChange}></input><br />
            <button onClick={handleAddChange}>Add Car</button>
        </>
    )
}
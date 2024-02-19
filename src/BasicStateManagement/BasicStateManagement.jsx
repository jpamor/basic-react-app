import Column from "./Components/Column";


export default function BasicStateManagement() {

    return (
        <div className="App">
            <Column state="PLANNED"></Column>
            <Column state="ONGOING"></Column>
            <Column state="DONE"></Column>
        </div>
    )
}
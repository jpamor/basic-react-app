import "./Styles/column.css"
import Task from "./Task"
export default function Column({ state }) {
    return <>
        <div className="column">

            <p>{state}</p>
            <Task title="Todo" />

        </div>
    </>
}
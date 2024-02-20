import { useState } from "react";
import { useStore } from "../Stores/stores";
import "./Styles/column.css"
import Task from "./Task"
import { PropTypes } from "prop-types";
import classNames from "classnames";

export default function Column({ state }) {

    const [text, setText] = useState("")
    const [open, setOpen] = useState(false)
    const [drop, setDrop] = useState(false)
    // const tasks = useStore((store) => store.tasks);

    const tasks = useStore((store) =>
        store.tasks.filter((task) => task.state === state)
    );

    const addTask = useStore((store) => store.addTask);

    const setDraggedTask = useStore((store) => store.setDraggedTask);

    const draggedTask = useStore((store) => store.draggedTask);

    const movedTask = useStore((store) => store.moveTask);




    return <>
        <div className={classNames("column", { drop: drop })}
            onDragOver={e => {
                setDrop(true)
                e.preventDefault()
            }}
            onDrop={() => {
                setDrop(false)
                movedTask(draggedTask, state)
                setDraggedTask(null);
            }}

            onDragLeave={e => {
                setDrop(false)
                e.preventDefault()
            }}

        >

            <div className="titleWrapper">
                <p>{state}</p>
                <button onClick={() => setOpen(true)}>Add</button>
            </div>

            {tasks.map((task) => (
                <Task title={task.title} key={task.title + "asdasd"} />)
            )}
            {open &&
                <div className="Modal">
                    <div className="modalContent">
                        <input onChange={(e) => setText(e.target.value)} value={text}></input>
                        <button onClick={() => {

                            console.log(state)
                            addTask(text, state);
                            setText("");
                            setOpen(false)
                        }}>
                            Submit
                        </button>
                    </div>
                </div>}
        </div >
    </>
}

Column.propTypes = {
    state: PropTypes.string,
}


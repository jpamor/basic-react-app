import classNames from "classnames";
import "./Styles/task.css";
import { PropTypes } from "prop-types";
import { useStore } from "../Stores/stores";
import trash from '../../../assets/trash.svg';

export default function Task({ title }) {

    const task = useStore((store) =>
        store.tasks.find(task => task.title === title)
    );

    const deleteTask = useStore(store => store.deleteTask)

    const setDraggedTask = useStore(store => store.setDraggedTask);


    return (
        <div className="task" draggable onDragStart={() => { setDraggedTask(task.title) }}>
            <div> {task.title}</div>
            <div className="buttomWrapper">
                <div >
                    <img src={trash} onClick={() => { deleteTask(task.title) }}></img>
                </div>
                <div className={classNames('status', task.state)}>{task.state}</div>
            </div>
        </div >
    )
} 1

Task.propTypes = {
    title: PropTypes.string
}
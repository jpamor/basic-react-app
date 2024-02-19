import classNames from 'classnames/bind';
import "./Styles/task.css";
const STATUS = 'PLANNED'

export default function Task({ title }) {

    return (
        <div className="task">
            <div> {title}</div>
            <div>
                <div className="buttomWrapper"></div>
                <div className={classNames('status', STATUS)}>{STATUS}</div>
            </div>
        </div>
    )
}
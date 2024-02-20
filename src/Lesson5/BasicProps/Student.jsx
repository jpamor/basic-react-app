
// propTypes = a mechanism that ensure that the passed value is of the 
// the correct data type.
// age: PropTypes.number

// props = read-only properties that are shared between components.
// A parent component can send data to a child component.
// <Component key=Value />

// conditional redering = allows you to control what gets rendered in your 
// application base on certain conditions
// (show, hide, or change components)

import { PropTypes } from "prop-types";

function Student(props) {

    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );

}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}



Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student
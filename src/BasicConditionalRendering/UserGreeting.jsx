

import PropTypes from "prop-types"

function UserGreeting(props) {
    // if (props.isLoggedIn) {
    //     return <h2> Welcome {props.username}</h2>
    // } else {
    //     return <h2>Please log in to continue</h2>
    // }

    // props.isLoggedIn ?
    // <h2 className="welcome-message">Welcome {props.username}</h2> :
    // <h2 className="login-promp">Please Login to continue</h2>

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const loginPropm = <h2 className="login-promp">Please Login to continue</h2>;

    return (props.isLoggedIn ? welcomeMessage : loginPropm);

}


UserGreeting.proptypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}


UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting
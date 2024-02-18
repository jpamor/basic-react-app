import UserGreeting from './UserGreeting'
import './index.css'



function BasicConditionalRendoring() {
  return (
    <>

    <UserGreeting isLoggedIn={true} username="jCode"/>

    </>
  )
}

export default BasicConditionalRendoring

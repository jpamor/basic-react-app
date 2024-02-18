
import './index.css'

import Student from './Student'

function BasicProps() {

  return (
    <>
      <Student name="Spongebob" age={12} isStudent={true}/>
      <Student name="Patrick" age={19} isStudent={false}/>
      <Student name="Squidward" age={20} isStudent={false}/>
      <Student name="Sandy" age={22} isStudent={true}/>
      <Student name="Larry" />
    </>
  )
}

export default BasicProps

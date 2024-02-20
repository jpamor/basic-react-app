import './App.css'


import Food from './Lesson1/BasicApp/Food'
import BasicComponent from './Lesson3/BasicComponents/App'
import BasicRenderList from './Lesson6/BasicRenderList/BasicRenderList'
import BasicConditionalRendoring from './Lesson7/BasicConditionalRendering/BasicConditionalRendering'
import BasicUseState from './Lesson2/BasicUseState/BasicUseState'
import BasicUpdateFunction from './Lesson2/BasicUpdateFunction/BasicUpdateFunction'
import UpdateArray from './Lesson2/BasicUpdateFunction/BasicUpdateArray/UpdateArrays'
import UpdateArrayObject from './Lesson2/BasicUpdateFunction/BasicUpdateArray/UpdateArrayObject'
import UpdateObject from './Lesson2/BasicUpdateFunction/BasicUpdateObject/UpdateObject'
import BasicClickEvent from './Lesson4/BasicClickEvent/App'
import BasicOnChange from './Lesson4/BasicClickEvent/BasicOnChange/BasicOnChange'
import BasicFetch from './Lesson8/BasicFetch/BasicFetch'
import BasicStateManagement from './Lesson9/BasicStateManagement/BasicStateManagement'

function App() {

  return (
    <>
      <Food></Food>
      <hr />
      <BasicComponent></BasicComponent>
      <hr />
      <BasicRenderList ></BasicRenderList>
      <hr />
      <BasicConditionalRendoring> </BasicConditionalRendoring>
      <hr />
      <BasicUseState></BasicUseState>
      <hr />
      <BasicClickEvent></BasicClickEvent>
      <hr />
      <BasicOnChange></BasicOnChange>
      <hr />
      <BasicUpdateFunction></BasicUpdateFunction>
      <hr />
      <UpdateArray></UpdateArray>
      <hr />
      <UpdateObject></UpdateObject>
      <hr />
      <UpdateArrayObject></UpdateArrayObject>
      <hr />
      <BasicFetch />
      <hr />
      <BasicStateManagement></BasicStateManagement>
    </>
  )
}

export default App

import List from "./List"
import './index.css'

function BasicRenderList() {

  const fruits = [{ id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 100 },
  { id: 3, name: "berry", calories: 50 },
  { id: 4, name: "banana", calories: 100 },
  { id: 5, name: "peach", calories: 10 },
  { id: 6, name: "coconot", calories: 95 }]


  const vegetables = [{ id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 100 },
  { id: 3, name: "berry", calories: 50 },
  { id: 4, name: "banana", calories: 100 },
  { id: 5, name: "peach", calories: 10 },
  { id: 6, name: "coconot", calories: 95 }]



  return (
    <>
      {fruits.length > 0 && <List itemList={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List itemList={vegetables} category="Vegetables" />}
      {vegetables.length > 0 && <List  />}
    </>
  )
}


export default BasicRenderList
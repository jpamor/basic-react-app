
import PropTypes from "prop-types"
function List(props) {


    // fruits.sort((a, b) => a.name.localeCompare(b.name)) //ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) //rev ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories) // NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories) // rev NUMBERIC

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);


    const listFruit = props.itemList.map((fruit) =>
        <li key={fruit.id}>
            {fruit.name} : &nbsp;
            <b>{fruit.calories}</b>
        </li>
    )

    return (
        <>
            <h3 className="list-category">{props.category}</h3>
            <ol className="list-item">{listFruit}</ol>
        </>
    )

}

List.propTypes = {
    category: PropTypes.string,
    itemList: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number })
    )
}


List.defaultProps = {
    category: "Category",
    itemList: []

}

export default List
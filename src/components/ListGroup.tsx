import { Fragment } from "react/jsx-runtime";
import { MouseEvent} from "react";
let items = ["New york", "Barranquilla", "Heneken", "medellin", "Cartagena"];

//items = [];

//evente  handler
const handleClick = (event: MouseEvent) => console.log(event);
function ListGroup() {
  return (
    <>
      <h1>list</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

let items = ["New york", "Barranquilla", "Heneken", "medellin", "Cartagena"];

//items = [];

//evente  handler
const handleClick = (event: MouseEvent) => console.log(event);
function ListGroup() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>list</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

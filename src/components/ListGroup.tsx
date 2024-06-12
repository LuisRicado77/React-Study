import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";



//items = [];

interface Props{
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

//evente  handler
const handleClick = (event: MouseEvent) => console.log(event);
function ListGroup({items, heading,onSelectedItem}: Props) {
 
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
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
              onSelectedItem(item);
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

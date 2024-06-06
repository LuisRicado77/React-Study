import { Fragment } from "react/jsx-runtime";
let items = [
  "New york",
  "Barranquilla",
  "Heneken",
  "medellin",
  "Cartagena"
];

items = [];


function ListGroup() {
  return (
        <>
            <h1>list</h1>
            {items.length === 0 && <p>No item found</p>}
                <ul className="list-group">
                 {items.map((item) =>(
                    <li key={item}>{item}</li>
                 ))}
                </ul>
        </>
  )
}

export default ListGroup;

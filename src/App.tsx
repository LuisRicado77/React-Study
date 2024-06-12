import ListGroup from "./components/ListGroup"

function App(){
  let items = ["New york", "Barranquilla", "Heneken", "medellin", "Cartagena"];
  return <div><ListGroup items={items} heading={"Cities"}/></div>
}

export default App;
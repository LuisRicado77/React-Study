import ListGroup from "./components/ListGroup"



function App(){
  let items = ["New york", "Barranquilla", "Heneken", "medellin", "Cartagena"];

  const handleSelectItem = (item:string) =>{
    console.log(item)
  }
  return <div><ListGroup items={items} heading={"Cities"} onSelectedItem={handleSelectItem}/></div>
}

export default App;
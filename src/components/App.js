import React, { useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [edit, setEdit] = useState({})

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(r => r.json())
    .then(setPizzas)
  }, [])

  function handleEditPizza(editedPizza){
    const updateTheZa = pizzas.map(pizza => {
     return pizza.id === editedPizza.id ? editedPizza : pizza
    })
    setPizzas(updateTheZa)
    fetch(`http://localhost:3001/pizzas/${editedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(editedPizza)
    })
  }

  return (
    <>
      <Header />
      <PizzaForm edit={edit} handleEditPizza={handleEditPizza}/>
      <PizzaList pizzas={pizzas} setEdit={setEdit}/>
    </>
  );
}

export default App;

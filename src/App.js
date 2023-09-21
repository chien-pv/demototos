import logo from "./logo.svg";
import "./App.css";
import FormSearch from "./components/form_search";
import ListTodos from "./components/list_todos";
import { useState } from "react";

function App() {
  let list = [
    { name: "Hoc JS", status: false },
    { name: "Hoc ReactJs", status: false },
    { name: "Hoc HTML", status: true },
    { name: "Hoc CSS", status: false },
    { name: "Hoc PHP", status: false },
    { name: "Hoc Ruby", status: false },
  ];
  let [listTodos, setTodos] = useState(list);

  function deleteTodo(index) {
    listTodos.splice(index, 1);
    console.log(listTodos);
    setTodos([...listTodos]);
  }

  return (
    <div className="container">
      <h1 className="title">TODO</h1>
      <FormSearch />
      <ListTodos listTodos={listTodos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

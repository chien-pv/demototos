import logo from "./logo.svg";
import "./App.css";
import FormSearch from "./components/form_search";
import ListTodos from "./components/list_todos";

function App() {
  return (
    <div className="container">
      <h1 className="title">TODO</h1>
      <FormSearch />
      <ListTodos />
    </div>
  );
}

export default App;

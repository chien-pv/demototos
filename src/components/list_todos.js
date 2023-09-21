import TodoItem from "./todo_item";

function ListTodo(props) {
  let datas = props.listTodos.map(function (todo, index) {
    return (
      <TodoItem
        index={index}
        deleteTodo={props.deleteTodo}
        key={index}
        name={todo.name}
      />
    );
  });

  return <div className="list-todos">{datas}</div>;
}

export default ListTodo;

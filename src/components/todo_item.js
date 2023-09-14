function TodoItem() {
  return (
    <div style={{ marginTop: "5px" }} className="todo-item row">
      <p style={{ marginTop: "15px" }} className="col-9 mg-t">
        Hoc react
      </p>
      <div className="col-3">
        <div style={{ marginTop: "10px" }} className="row">
          <button
            style={{ marginRight: "5px" }}
            className="col-2 btn btn-outline-danger"
          >
            <i className="fa fa-trash"></i>
          </button>
          <button className="btn btn-outline-success col-2">
            <i className="fa fa-edit"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;

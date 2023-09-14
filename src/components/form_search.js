function FormSearch() {
  return (
    <div className="form-search">
      <form className="row g-3">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            id="search"
            placeholder="search ..."
          />
        </div>
        <div className="col-auto">
          <button type="button" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </form>
      <div className="filter">
        <button type="button" className="btn btn-outline-success">
          All
        </button>
        <button type="button" className="btn btn-outline-success">
          Done
        </button>
        <button type="button" className="btn btn-outline-success">
          In-progress
        </button>
      </div>
    </div>
  );
}
export default FormSearch;

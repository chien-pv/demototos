import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function FormSearch() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <button
            onClick={handleShow}
            type="button"
            className="btn btn-primary mb-3"
          >
            Create
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            id="create"
            placeholder="Enter todo name ..."
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default FormSearch;

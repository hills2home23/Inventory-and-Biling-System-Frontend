import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  getWarehouses,
  addWarehouse,
  updateWarehouse,
  deleteWarehouse
} from '../../actions';

// Styles for edit and delete buttons
const buttonStyles = {
  background: "transparent",
  border: "none"
};
// below variable has to be deleted
const sample = [
  {
    name: 'A',
    city: 'abc'
  },
  {
    name: 'A',
    city: 'abc'
  },
  {
    name: 'A',
    city: 'abc'
  },
  {
    name: 'A',
    city: 'abc'
  }
];
function Warehouse() {
  // For Add Modal
  const [showAddModal, setAddShow] = useState(false);
  const handleCloseAdd = () => setAddShow(false);
  const handleShowAdd = () => setAddShow(true);

  // For Update Modal
  const [showUpdateModal, setUpdateShow] = useState(false);
  const handleCloseUpdate = () => setUpdateShow(false);
  const handleShowUpdate = () => setUpdateShow(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWarehouses());
  }, [dispatch]);
  const warehouses = useSelector(state => state.warehouses) || sample;
  const warehouse = useSelector(state => state.warehouse) || {};
  // console.table(warehouse[0]);

  // This will render all the warehouses
  const renderWarehouses = (warehouses) => {
    return (warehouses.map(w => {
      return (
        <tr key={w._id}>
          <td className="text-center align-middle"> {w.name} </td>
          <td className="text-center align-middle"> {w.city} </td>
          <td className="text-center align-middle">
            <Button style={buttonStyles} onClick={handleShowUpdate} >
              <span><EditIcon color="primary" /></span>
            </Button>
            {/* Below modal will appear when update warehouse is clicked */}
            <Modal show={showUpdateModal} onHide={handleCloseUpdate} backdrop="static">
              <Modal.Header closeButton style={{ background: "#ffffff" }}>
                <Modal.Title>Edit Warehouse</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ background: "#ffffff" }}>
                {/* Form for adding a new warehouse */}
                <Form>
                  <Form.Group controlId="formWarehouseName">
                    <Form.Control type="text" defaultValue={w.name}/>
                  </Form.Group>
                  <Form.Group controlId="formWarehouseCity">
                    <Form.Control type="text" defaultValue={w.city} />
                  </Form.Group>
                  <Button variant="primary" onClick={updateWarehouse(w._id, w)}>
                    Update Warehouse
                  </Button>
                </Form>
                {/* Form ends */}
              </Modal.Body>
              <Modal.Footer style={{ background: "#ffffff" }}>
                <Button variant="secondary" onClick={handleCloseUpdate}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            {/* Modal ends */}
            <Button
              style={buttonStyles}
              onClick={() => { deleteWarehouse(w._id); }}
            >
              <span><DeleteIcon color="secondary" /></span>
            </Button>
          </td>
        </tr>
      );
    }));
  }

  // This will add a new warehouse
  const addNewWarehouse = () => {

  };
  return (
    <div>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex p-1 justify-content-between">
              <h4 className="card-title">Warehouses</h4>
              <button onClick={handleShowAdd} className="btn btn-primary">Add Warehouse</button>
            </div>
            {/* Below modal will appear when add new warehouse is clicked */}
            <Modal show={showAddModal} onHide={handleCloseAdd} backdrop="static">
              <Modal.Header closeButton style={{ background: "#ffffff" }}>
                <Modal.Title>Add New Warehouse</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ background: "#ffffff" }}>
                {/* Form for adding a new warehouse */}
                <Form>
                  <Form.Group controlId="formWarehouseName">
                    <Form.Control type="text" placeholder="Enter warehouse name" />
                  </Form.Group>
                  <Form.Group controlId="formWarehouseCity">
                    <Form.Control type="text" placeholder="Enter warehouse city" />
                  </Form.Group>
                  <Button variant="primary" onClick={}>
                    Add Warehouse
                  </Button>
                </Form>
                {/* Form ends */}
              </Modal.Body>
              <Modal.Footer style={{ background: "#ffffff" }}>
                <Button variant="secondary" onClick={handleCloseAdd}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
            {/* Modal ends */}
            {/* Warehouse Table */}
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-center align-middle"> Warehouse Name </th>
                    <th className="text-center align-middle"> City </th>
                    <th className="text-center align-middle"> Actions </th>
                  </tr>
                </thead>
                <tbody>
                  {warehouses.length > 0 && renderWarehouses(warehouses)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Warehouse

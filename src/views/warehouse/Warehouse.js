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
// const sample = [
//   {name: 'A',city: 'abc'},
//   {name: 'A',city: 'abc'},
//   {name: 'A',city: 'abc'},
//   {name: 'A',city: 'abc'}];

function Warehouse() {
  const dispatch = useDispatch();
  
  // For Add Form
  const [addFormData, setAddFormData] = useState({
    name: "",
    city: ""
  });
  const handleOnChangeAdd = (event) => {
    setAddFormData({
      ...addFormData,
      [event.target.name]: event.target.value
    });
  };
  const handleAddSubmit = (e) => {
    e.preventDefault();
    console.log(addFormData);
    dispatch(addWarehouse(addFormData));
  }
  
  // For Update Form
  const [updateFormData, setUpdateFormData] = useState({
    name: "",
    city: ""
  });
  const handleOnChangeUpdate = (event) => {
    setUpdateFormData({
      ...updateFormData,
      [event.target.name]: event.target.value
    });
  };
  const handleUpdateSubmit = (e,id) => {
    e.preventDefault();
    console.log(updateFormData);
    dispatch(updateWarehouse(id, updateFormData));
  }

  // For Add Modal
  const [showAddModal, setAddShow] = useState(false);
  const handleCloseAdd = () => setAddShow(false);
  const handleShowAdd = () => setAddShow(true);

  // For Update Modal
  const [showUpdateModal, setUpdateShow] = useState(false);
  const handleCloseUpdate = () => setUpdateShow(false);
  const handleShowUpdate = () => setUpdateShow(true);

  useEffect(() => {
    dispatch(getWarehouses());
  }, [dispatch]);
  const {warehouses} = useSelector(state => state.warehouse) || [];
  const warehouse = useSelector(state => state.warehouse) || {};
  // console.log(warehouse);

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
                <Form onSubmit={(e) => handleUpdateSubmit(e, w._id)}>
                  <Form.Group controlId="formWarehouseName">
                    <Form.Control type="text" name="name" placeholder="Enter warehouse name" defaultValue={w.name} onChange={handleOnChangeUpdate}/>
                  </Form.Group>
                  <Form.Group controlId="formWarehouseCity">
                    <Form.Control type="text" name="city" placeholder="Enter warehouse city" defaultValue={w.city} onChange={handleOnChangeUpdate} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
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
              onClick={() => { dispatch(deleteWarehouse(w._id)); }}
            >
              <DeleteIcon color="secondary" />
            </Button>
          </td>
        </tr>
      );
    }));
  }


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
                <Form onSubmit={handleAddSubmit}>
                  <Form.Group controlId="formWarehouseName">
                    <Form.Control type="text" name="name" placeholder="Enter warehouse name" onChange={handleOnChangeAdd} />
                  </Form.Group>
                  <Form.Group controlId="formWarehouseCity">
                    <Form.Control type="text" name="city" placeholder="Enter warehouse city" onChange={handleOnChangeAdd} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
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

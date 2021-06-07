import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  // getOfflineOrders,
  addOfflineOrder,
  updateOfflineOrder,
  getOfflineOrderByID
  // deleteOfflineOrder
} from "../../actions";

function OfflineOrderForm() {
  const { id } = useParams();
  // console.log(id);
  const currentPath = useLocation().pathname;
  // console.log(currentPath);
  const isEditForm = currentPath.indexOf("/edit/") !== -1 ? true : false;

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
    dispatch(addOfflineOrder(addFormData));
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
  const handleUpdateSubmit = (e, id) => {
    e.preventDefault();
    // console.log(updateFormData);
    dispatch(updateOfflineOrder(id, updateFormData));
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOfflineOrderByID(id));
  }, [dispatch]);
  const { offlineOrder } = useSelector((state) => state.offlineOrders);
  // console.log(offlineOrder);

  // const formatDate = (date) => {
  //   if (date) {
  //     const d = new Date(date);
  //     return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} - ${d.getUTCHours()}:${d.getUTCMinutes()}`;
  //   }
  //   return "";
  // };
  return (
    <div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                {isEditForm ? "Edit Offline Order" : "Add Offline Order"}
              </h4>
              <div className="table-responsive">
                <Form onSubmit={(e) => {isEditForm ? handleUpdateSubmit(e, id) : handleAddSubmit(e)}}>
                  <Form.Group controlId="formProducts">
                    <Form.Control
                      type="text"
                      name="customerName"
                      placeholder="Enter Customer Name"
                      onChange={isEditForm ? handleOnChangeUpdate : handleOnChangeAdd}
                      value={isEditForm ? offlineOrder.customerName : ""}
                    />
                  </Form.Group>
                  <Form.Group controlId="formAmount">
                    <Form.Control
                      readOnly
                      type="text"
                      name="totalPrice"
                      onChange={isEditForm ? handleOnChangeUpdate : handleOnChangeAdd}
                      placeholder="Total Price"
                      value={isEditForm ? offlineOrder.totalPrice : ""}
                    />
                  </Form.Group>
                  <Form.Group controlId="formStatus">
                    <Form.Control
                      type="text"
                      name="status"
                      onChange={isEditForm ? handleOnChangeUpdate : handleOnChangeAdd}
                      placeholder="Enter Order Status"
                      value={isEditForm ? offlineOrder.status : ""}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPaymentStatus">
                    <Form.Control as="select"
                      placeholder="Select Payment Status"
                      name="paymentStatus"
                      onChange={isEditForm ? handleOnChangeUpdate : handleOnChangeAdd}
                      value={isEditForm ? offlineOrder.paymentStatus : ""}
                    >
                      <option value="Unpaid">Unpaid</option>
                      <option value="Partially Paid">Partially Paid</option>
                      <option value="Paid">Paid</option>
                    </Form.Control>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    {isEditForm ? "Save Changes" : "Add Order"}
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfflineOrderForm

import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { useLocation } from "react-router-dom";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getOfflineOrderByID,
  updateOfflineOrder,
  getProducts,
} from "../../actions";

function EditOrderForm() {

  const {id} = useParams();

  // For Update Form
  const [updateFormData, setUpdateFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerAddress1: "",
    customerAddress2: "",
    customerCity: "",
    customerState: "",
    customerPincode: "",
    cart: [{ productId: "", productQuantity: "" }],
    totalPrice: "",
    discount: "",
    status: "",
    paymentStatus: ""
  });
  const handleOnChangeUpdate = (event) => {
    setUpdateFormData({
      ...updateFormData,
      [event.target.name]: event.target.value
    });
  };
  const handleUpdateSubmit = (e, id) => {
    e.preventDefault();
    console.log(updateFormData);
    // dispatch(updateOfflineOrder(id, updateFormData));
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getOfflineOrderByID(id));
  }, [dispatch]);
  const { products } = useSelector((state) => state.product);
  const { offlineOrder } = useSelector((state) => state.offlineOrders);
  // const productNames = products.map(p => p.title);
  // console.log(productNames);

  return (
    <div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Edit Order</h3>
              <div className="table-responsive">
                <Form onSubmit={(e) => { handleUpdateSubmit(e) }}>
                  <Form.Group controlId="formCustomerName">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Customer Name" name="customerName" onChange={handleOnChangeUpdate} />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formCustomerEmail">
                      <Form.Label>Customer Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Customer Email" name="customerEmail" onChange={handleOnChangeUpdate} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCustomerPhone">
                      <Form.Label>Customer Phone</Form.Label>
                      <Form.Control type="text" placeholder="Enter Customer Phone" name="customerPhone" onChange={handleOnChangeUpdate} />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formCustomerAddress1">
                    <Form.Label>Address Line 1</Form.Label>
                    <Form.Control type="text" placeholder="Flat No, House No, Building, Company, Apartment" name="customerAddress1" onChange={handleOnChangeUpdate} />
                  </Form.Group>

                  <Form.Group controlId="formCustomerAddress2">
                    <Form.Label>Address Line 2</Form.Label>
                    <Form.Control type="text" placeholder="Area, Colony Street, Sector, Village" name="customerAddress2" onChange={handleOnChangeUpdate} />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formCustomerCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="Enter City" name="customerCity" onChange={handleOnChangeUpdate} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCustomerState">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="Enter State" name="customerState" onChange={handleOnChangeUpdate} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCustomerPincode">
                      <Form.Label>PINCODE</Form.Label>
                      <Form.Control type="text" placeholder="Enter Pincode" name="customerPincode" onChange={handleOnChangeUpdate} />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    {/* This section is for updating products */}
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formTotalPrice">
                      <Form.Label>Total Price</Form.Label>
                      <Form.Control type="text" placeholder="Total Price" name="totalPrice" readOnly onChange={handleOnChangeUpdate} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formDiscount">
                      <Form.Label>Discount</Form.Label>
                      <Form.Control type="text" placeholder="Enter Discount if any" name="discount" onChange={handleOnChangeUpdate} />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formStatus">
                      <Form.Label>Order Status</Form.Label>
                      <Form.Control type="text" placeholder="Enter Order Status" name="status" onChange={handleOnChangeUpdate} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPaymentStatus">
                      <Form.Label>Payment Status</Form.Label>
                      <Form.Control as="select" name="paymentStatus" defaultValue="Unpaid" onChange={handleOnChangeUpdate} >
                        <option value="Unpaid">Unpaid</option>
                        <option value="Partially Paid">Partially Paid</option>
                        <option value="Paid">Paid</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>

                  <Button variant="primary" size="lg" type="submit">Edit Order</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditOrderForm
import React from 'react';
import { useState, useEffect } from "react";
// import { useParams } from "react-router";
// import { useLocation } from "react-router-dom";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addOfflineOrder,
  getProducts,
} from "../../actions";

function OfflineOrderForm() {
  // For Add Form
  const [addFormData, setAddFormData] = useState({
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
  const handleOnChangeAdd = (event) => {
    setAddFormData({
      ...addFormData,
      [event.target.name]: event.target.value
    });
  };
  const handleAddSubmit = (e) => {
    e.preventDefault();
    console.log(addFormData);
    // dispatch(addOfflineOrder(addFormData));
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const { products } = useSelector((state) => state.product);
  // const productNames = products.map(p => p.title);
  // console.log(productNames);

  return (
    <div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Add Offline Order</h3>
              <div className="table-responsive">
                <Form onSubmit={(e) => { handleAddSubmit(e) }}>
                  <Form.Group controlId="formCustomerName">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Customer Name" name="customerName" onChange={handleOnChangeAdd} />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formCustomerEmail">
                      <Form.Label>Customer Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Customer Email" name="customerEmail" onChange={handleOnChangeAdd} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCustomerPhone">
                      <Form.Label>Customer Phone</Form.Label>
                      <Form.Control type="text" placeholder="Enter Customer Phone" name="customerPhone" onChange={handleOnChangeAdd} />
                    </Form.Group>
                  </Form.Row>

                  <Form.Group controlId="formCustomerAddress1">
                    <Form.Label>Address Line 1</Form.Label>
                    <Form.Control type="text" placeholder="Flat No, House No, Building, Company, Apartment" name="customerAddress1" onChange={handleOnChangeAdd} />
                  </Form.Group>

                  <Form.Group controlId="formCustomerAddress2">
                    <Form.Label>Address Line 2</Form.Label>
                    <Form.Control type="text" placeholder="Area, Colony Street, Sector, Village" name="customerAddress2" onChange={handleOnChangeAdd} />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formCustomerCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="Enter City" name="customerCity" onChange={handleOnChangeAdd} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCustomerState">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="Enter State" name="customerState" onChange={handleOnChangeAdd} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formCustomerPincode">
                      <Form.Label>PINCODE</Form.Label>
                      <Form.Control type="text" placeholder="Enter Pincode" name="customerPincode" onChange={handleOnChangeAdd} />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    {/* This section is for adding products */}
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formTotalPrice">
                      <Form.Label>Total Price</Form.Label>
                      <Form.Control type="text" placeholder="Total Price" name="totalPrice" readOnly onChange={handleOnChangeAdd} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formDiscount">
                      <Form.Label>Discount</Form.Label>
                      <Form.Control type="text" placeholder="Enter Discount if any" name="discount" onChange={handleOnChangeAdd} />
                    </Form.Group>
                  </Form.Row>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formStatus">
                      <Form.Label>Order Status</Form.Label>
                      <Form.Control type="text" placeholder="Enter Order Status" name="status" onChange={handleOnChangeAdd} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formPaymentStatus">
                      <Form.Label>Payment Status</Form.Label>
                      <Form.Control as="select" name="paymentStatus" defaultValue="Unpaid" onChange={handleOnChangeAdd} >
                        <option value="Unpaid">Unpaid</option>
                        <option value="Partially Paid">Partially Paid</option>
                        <option value="Paid">Paid</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>

                  <Button variant="primary" size="lg" type="submit">Add Order</Button>
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


{/* <Form.Group controlId="formProducts">
<Form.Control
  as="select"
  // multiple
  name="cart"
  onChange={handleOnChangeAdd}
  defaultValue={""}
>
  <option value="">Select Products</option>
  {
    products.map(p => {
      return <option key={p._id} value={p.title}>{p.title}</option>
    })
  }
</Form.Control>
<Form.Control type="text" name="productQuantity">

</Form.Control>
</Form.Group> */}
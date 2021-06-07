import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  getOfflineOrders,
  // addOfflineOrder,
  // updateOfflineOrder,
  deleteOfflineOrder
} from "../../actions";

// Styles for edit and delete buttons
const buttonStyles = {
  background: "transparent",
  border: "none"
};

function OfflineOrders() {

  const dispatch = useDispatch();
  const { offlineOrders } = useSelector((state) => state.offlineOrders);

  useEffect(() => {
    dispatch(getOfflineOrders());
  }, [dispatch]);
  // console.log(offlineOrders);

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} - ${d.getUTCHours()}:${d.getUTCMinutes()}`;
    }
    return "";
  };
  const renderOfflineOrders = (orders) => {
    return (orders.map((orderItem, index) => {
      return (
        <tr key={orderItem._id}>
          <td> {index + 1} </td>
          <td> {orderItem.customerName} </td>
          <td> {orderItem.cart} </td>
          <td> &#8377; {orderItem.totalPrice} </td>
          <td> {formatDate(orderItem.createdAt)} </td>
          <td> {orderItem.status} </td>
          <td> {orderItem.paymentStatus} </td>
          <td>
            <Link to={`/offorders/edit/${orderItem._id}`} style={buttonStyles}>
              <span><EditIcon color="primary" /></span>
            </Link>
            <Button
              style={buttonStyles}
              onClick={() => { dispatch(deleteOfflineOrder(orderItem._id)); dispatch(getOfflineOrders()); }}
            >
              <DeleteIcon color="secondary" />
            </Button>
          </td>
        </tr>
      )
    }))
  }
  return (
    <div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
                <h4 className="card-title">Offline Orders</h4>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th> # </th>
                      <th> Customer </th>
                      <th> Products </th>
                      <th> Amount </th>
                      <th> Created At </th>
                      <th> Status </th>
                      <th> Payment Status</th>
                      <th> Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {offlineOrders.length === 0 ? <tr><td>You don't have any orders</td></tr> : renderOfflineOrders(offlineOrders)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfflineOrders

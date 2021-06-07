import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getVerifiedProducts } from "../../actions";

function Orders() {

    const { orders } = useSelector((state) => state.order);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getVerifiedProducts());
    }, [dispatch]);

    const formatDate = (date) => {
        if (date) {
          const d = new Date(date);
          return `${d.getFullYear()}-${
            d.getMonth() + 1
          }-${d.getDate()} ${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`;
        }
        return "";
      };

    return (
        <div>
          {/* <div className="page-header">
            <h3 className="page-title"> Basic Tables </h3>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
                <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
              </ol>
            </nav>
          </div> */}
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Orders</h4>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th> OrderID </th>
                          <th> Customer </th>
                          <th> Ship To </th>
                          <th> Amount </th>
                          <th> Created At </th>
                          <th> Status </th>
                        </tr>
                      </thead>
                      <tbody>
                      {orders.length===0?<tr><td>You Doesn't have any orders</td></tr>:orders.map((orderItem, index) => (

                        <tr key={orderItem._id}>
                          <td> {index+1} </td>
                          <td> {orderItem.address[0].fullName.toUpperCase()} </td>
                          <td>  </td>
                          <td> &#8377; {orderItem.cartTotal} </td>
                          <td> {formatDate(orderItem.createdAt)} </td>
                          <td> {orderItem.status} </td>

                        </tr>

                      ))}
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

export default Orders

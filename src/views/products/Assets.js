import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../actions';

function Assets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const { products } = useSelector(state => state.product) || [];
  // console.table(products[0]);
  const renderProducts = (products) => {
    return (products.map(p => {
      return (
        <tr key={p._id}>
          <td className="text-center align-middle"> {p.title} </td>
          <td className="text-center align-middle"> {p.category} </td>
          <td>  </td>
        </tr>
      );
    }));
  }
  return (
    <div>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">All Products</h4>
            {/* <p className="card-description"> Add className <code>.table-bordered</code></p> */}
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th> Item Name </th>
                    <th> Category </th>
                    <th> Stock </th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 && renderProducts(products)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets

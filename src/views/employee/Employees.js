import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  getEmployees,
  deleteEmployee
} from '../../actions';

// Styles for edit and delete buttons
const buttonStyles = {
  background: "transparent",
  border: "none"
};

//This sample has to deleted.
const sample = [
  { name: 'A', email: 'abc', role: 'admin' },
  { name: 'A', email: 'abc', role: 'admin' },
  { name: 'A', email: 'abc', role: 'admin' },
  { name: 'A', email: 'abc', role: 'admin' }];


function Employees() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch])
  const employees = useSelector(state => state.employees) || sample; // sample to be replaced by []

  const renderEmployees = (employees) => {
    return (employees.map(emp => {
      return (
        <tr key={emp._id}>
          <td className="text-center align-middle"> {emp.name} </td>
          <td className="text-center align-middle"> {emp.email} </td>
          <td className="text-center align-middle"> {emp.role} </td>
          <td className="text-center align-middle">
            <Link to="#">
              <span><ShowIcon color="primary" /></span>
            </Link>
            <Button
              style={buttonStyles}
            onClick={() => { deleteEmployee(emp._id); }}
            >
              <span><DeleteIcon color="secondary" /></span>
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
              <h4 className="card-title">Employees</h4>
              {/* <button onClick={handleShowAdd} className="btn btn-primary">Add Warehouse</button> */}
            </div>
            {/* Employee Table */}
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-center align-middle"> Name </th>
                    <th className="text-center align-middle"> Email </th>
                    <th className="text-center align-middle"> Role </th>
                    <th className="text-center align-middle"> Actions </th>
                  </tr>
                </thead>
                <tbody>
                  {employees.length > 0 && renderEmployees(employees)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees

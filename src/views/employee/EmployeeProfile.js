import React from 'react';
// import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Container, Row, Table } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getEmployeeByID } from "../../actions";

//This sample has to deleted.
const sample = { name: 'A', email: 'abc', role: 'admin', _id: 111 };

function EmployeeProfile() {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployeeByID(id));
  }, [dispatch]);
  let { singleEmployee } = useSelector(state => state.employee) || {};

  // To check if an object is empty or not
  if (Object.keys(singleEmployee).length === 0 && singleEmployee.constructor === Object)
    singleEmployee = sample;

  // console.log(singleEmployee);

  return (
    <div>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <div className="d-flex p-1 justify-content-between">
              <h3 className="card-title">Employee Details</h3>
            </div>
            <Container>
              <Row>
                <Table responsive striped className="text-left font-weight-light text-monospace table-borderless">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{singleEmployee.name}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{singleEmployee.email}</td>
                      {/* <td><Link to={`mailto:${singleEmployee.email}`}>{singleEmployee.email}</Link></td> */}
                    </tr>
                    <tr>
                      <th>Photo</th>
                      <td><img src="{singleEmployee.photo}" alt="user-image" /></td>
                    </tr>
                    <tr>
                      <th>Role</th>
                      <td>{singleEmployee.role}</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeProfile

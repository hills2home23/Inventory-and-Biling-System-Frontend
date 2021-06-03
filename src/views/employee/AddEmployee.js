import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signUpAction } from "../../actions";

function AddEmployee() {
  const dispatch = useDispatch();

  const [formData, setformData] = useState({
    name:"",
    email: "",
    password: "",
    role:"",
    passwordConfirm:""
  });

  const handleOnChange = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //call the action creater/ axios
    console.log(formData);
    dispatch(signUpAction(formData));

  };


  return (
    <div>
      <div className="d-flex align-items-center auth px-0 h-70">
        <div className="row w-100 mx-0">
          <div className="col-lg-7 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                {/*<img src={require("../../assets/images/logo.svg")} alt="logo" />*/}
              </div>
              <h4>Add New Employee</h4>
              <form className="pt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Name" onChange={handleOnChange}/>
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" onChange={handleOnChange}/>
                </div>
                <div className="form-group">
                    <select className="form-control form-control-lg" id="exampleFormControlSelect2" name="role" onChange={handleOnChange}>
                      <option value="">Select</option>
                      <option value="admin">Admin</option>
                      <option value="hr-payroll">HR and payroll</option>
                      <option value="finance">Finance</option>
                      <option value="sales-marketing">Sales & marketing</option>
                      <option value="brands-communication">Brands and communication</option>
                      <option value="logistics-supply-chain">Logistics and supply chain</option>
                      <option value="land-acquisition-farmer-support">Land acquisition/farmer support</option>
                      <option value="warehouse-management-inventory">Warehouse management/Inventory</option>
                      <option value="production-team">Production Team</option>IT Team
                    </select>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" name="password" id="exampleInputPassword1" placeholder="Password" onChange={handleOnChange}/>
                </div>

                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" name="passwordConfirm" id="exampleInputPassword1" placeholder="Confirm Password" onChange={handleOnChange}/>
                </div>
                <div className="mt-3">
                  <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">CREATE</button>
                  <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">SHARE LOGIN DETAILS</button>
                </div>                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee

import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function Register() {

  const [formData, setformData] = useState({
    name:"",
    email: "",
    password: "",
    role:""
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
    //signIn(formData);
  };


  return (
    <div>
      <div className="d-flex align-items-center auth px-0 h-100">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="card text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                {/*<img src={require("../../assets/images/logo.svg")} alt="logo" />*/}
              </div>
              <h4>New here?</h4>
              <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
              <form className="pt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" name="name" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Name" onChange={handleOnChange}/>
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" onChange={handleOnChange}/>
                </div>
                <div className="form-group">
                    <select className="form-control form-control-lg" id="exampleFormControlSelect2" name="role" onChange={handleOnChange}>
                      <option>Select</option>
                      <option>HR and payroll</option>
                      <option>Finance</option>
                      <option>Sales & marketing</option>
                      <option>Brands and communication</option>
                      <option>Logistics and supply chain</option>
                      <option>Land acquisition/farmer support</option>
                      <option>Warehouse management/Inventory</option>
                      <option>Production Team</option>IT Team
                    </select>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" name="password" id="exampleInputPassword1" placeholder="Password" onChange={handleOnChange}/>
                </div>
                {/*<div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>*/}
                <div className="mt-3">
                  <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit">SIGN UP</button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account? <Link to="/user-pages/login" className="text-primary">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

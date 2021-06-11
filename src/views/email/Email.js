import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useDispatch } from "react-redux";
import { sendEmail } from "../../actions";

function Email() {
  const dispatch = useDispatch();

  const [formData, setformData] = useState({
    email: "",
    subject: "",
    message:""
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
    dispatch(sendEmail(formData));
  };

    return (
        <div>
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Send Email</h4>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label for="exampleEmail">To</Label>
                      <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={handleOnChange} />
                    </FormGroup>

                    <FormGroup>
                    <Label for="exampleAddress">Subject</Label>
                    <Input type="text" name="subject" id="exampleAddress" placeholder="Subject" onChange={handleOnChange}/>
                    </FormGroup>    

                    <FormGroup>
                      <Label for="exampleText">Message</Label>
                      <Input type="textarea" name="message" id="exampleText" placeholder="Message" rows="4" onChange={handleOnChange}/>
                    </FormGroup>

                    <Button color="success" type="submit">Submit</Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Email

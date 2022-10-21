import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../../context/usercontext/UserContext";

const Register = () => {
  const { userCustomMethodSign, updateUserProfile, userEmailVerifications } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  console.log(error);

  const onRegisterSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    userCustomMethodSign(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        handleUserEmailVerify();
      })
      .then((err) => {
        console.log(err);
        setError(err.message);
      });
    //   updateUserProfile
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then(() => {})
      .then((err) => console.log(err));
  };

  // terms and condition accepted
  const acceptedHandler = (event) => {
    const checkboxValue = event.target.checked;
    setAccepted(checkboxValue);
  };

  // user email verifications
  const handleUserEmailVerify = () => {
    userEmailVerifications()
      .then(() => {
        toast.success("Check you mail for verification");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form className="w-75 mx-auto" onSubmit={onRegisterSubmit}>
        {/* name */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Name" />
        </Form.Group>
        {/* email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        {/* password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicCheckbox"
          onClick={acceptedHandler}
        >
          <Form.Check
            type="checkbox"
            label={
              <>
                Accept{" "}
                <Link to="/terms">your company terms and conditions</Link>{" "}
              </>
            }
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;

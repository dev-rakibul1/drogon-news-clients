import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "./../../context/usercontext/UserContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);

  const handleUserProfile = (event) => {
    event.preventDefault();
    console.log(name);
  };

  const handleNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  return (
    <div>
      <Form onSubmit={handleUserProfile}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* email */}
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            defaultValue={user?.email}
            readOnly
            placeholder="Enter email"
          />
          {/* name */}
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            defaultValue={name}
            onBlur={handleNameChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Profile;

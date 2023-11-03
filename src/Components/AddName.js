import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Form} from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";

const AddName = ({value, method, navigator}) => {
    // console.log(method);
    const { projects} = useSelector((state) => state.projectList);
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");
  // const [isInputEmpty, setIsInputEmpty] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    addData(inputName);
  };
  const addData = (name) => {
    console.log("projects", projects);
  
    // Check if the name already exists in the projects array
    const nameExists = projects.some((project) => project.name === name);
  
    if (nameExists) {
      alert("Project name already exists");
      return;
    }
  
    navigate(`/${navigator}`);
    dispatch(method(name));
  };
  
  return (
    <div className="formParent">
      <Container
        className="formParent-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Form style={{ width: "70%" }} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="text-center">Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="danger"
            type="submit"
            style={{ margin: "20px" }}
            // onClick={() =>
              
            // }
          >
            {value}
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default AddName

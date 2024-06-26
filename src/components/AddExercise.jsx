import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addExercise } from "../features/exerciseSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

const AddExercise = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [exercise, setExercise] = useState({
    name: "",
    duration: "",
    type: "",
  });

  const handleChange = (e) => {
    setExercise({ ...exercise, id: uuidv4(), [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExercise(exercise));
    navigate("/");
  };

  return (
    <Form
      className="w-50 mx-auto mt-5 border p-5 bg-light"
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3">
        <Form.Label>Exercise Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter exercise name"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Duration (minutes)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Duration"
          name="duration"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Type</Form.Label>
        <Form.Control
          type="text"
          placeholder="Exersice Type"
          name="type"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddExercise;

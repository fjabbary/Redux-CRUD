import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { updateExercise } from "../features/exerciseSlice";

const EditExercise = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation() || {};

  const [exercise, setExercise] = useState({
    name: "",
    duration: "",
    type: "",
  });

  useEffect(() => {
    setExercise(location.state);
  }, []);

  const handleChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExercise(exercise));
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
          value={exercise.name}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Duration (minutes)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Duration"
          name="duration"
          onChange={handleChange}
          value={exercise.duration}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Type</Form.Label>
        <Form.Control
          type="text"
          placeholder="Exersice Type"
          name="type"
          onChange={handleChange}
          value={exercise.type}
        />
      </Form.Group>

      <Button variant="warning" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default EditExercise;

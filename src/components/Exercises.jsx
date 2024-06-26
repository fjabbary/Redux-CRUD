import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { deleteExercise } from "../features/exerciseSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Exercises = () => {
  const dispatch = useDispatch();

  const exercises = useSelector((state) => state.exercises.exerciseList);

  return (
    <div>
      <ListGroup className="my-5 w-50 mx-auto">
        {exercises.map((item) => (
          <ListGroup.Item className="bg-light" key={item.id}>
            <div>
              <b>{item.name}</b> ({item.duration} minutes)
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <b>Exercise Type:</b> {item.type}
              </div>
              <div>
                <Button
                  variant="danger"
                  className="btn-sm ms-5"
                  onClick={() => dispatch(deleteExercise(item.id))}
                >
                  x
                </Button>
                <Button
                  variant="outline-success"
                  className="btn-sm ms-2"
                  as={Link}
                  to={`/edit/${item.id}`}
                  state={item}
                >
                  Edit
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Exercises;

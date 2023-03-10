import React from "react";
import "./ExerciseList.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

const ExerciseList = ({ exercise, handleAddList, exerciseActivities }) => {
    const { id, image, title, description, forAge, timeRequired } = exercise;

    const exerciseListId = exerciseActivities.map(
        (exerciseActivity) => exerciseActivity.id
    );

    return (
        <Col lg={4} className="mb-4">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text className="mb-2">
                        For Age : <span className="person-age">{forAge}</span>
                    </Card.Text>
                    <Card.Text>
                        Time required :{" "}
                        <span className="workout-time"> {timeRequired}s</span>
                    </Card.Text>
                    <Button
                        className={
                            exerciseListId.includes(id) ? "addedToList" : ""
                        }
                        onClick={() => handleAddList(exercise)}
                    >
                        {exerciseListId.includes(id) ? "Added" : "Add To List"}
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ExerciseList;

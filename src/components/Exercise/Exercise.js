import React from "react";
import "./Exercise.css";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import ExerciseList from "../ExerciseList/ExerciseList";

const Exercise = ({ exercises, handleAddList }) => {
    return (
        <div className="exercise-area">
            <h2 className="section-title mb-4">
                <span className="me-3">
                    <FontAwesomeIcon icon={faDumbbell} />
                </span>
                Home-Fitness-Club
            </h2>
            <p className="section-description mb-4">Select today’s exercise</p>

            <div className="exercises-wrapper">
                <Row>
                    {exercises.length > 0 ? (
                        exercises.map((exercise) => (
                            <ExerciseList
                                exercise={exercise}
                                handleAddList={handleAddList}
                                key={exercise.id}
                            />
                        ))
                    ) : (
                        <h2>There is no data</h2>
                    )}
                </Row>
            </div>
        </div>
    );
};

export default Exercise;

import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";
import "./FitnessClub.css";

const FitnessClub = () => {
    const [fitnessActivities, setFitnessActivities] = useState([]);
    const [exerciseActivities, setExerciseActivities] = useState([]);

    useEffect(() => {
        fetch("fitnessActivities.JSON")
            .then((res) => res.json())
            .then((data) => setFitnessActivities(data));
    }, []);

    const handleAddList = (seletedExerciseActivity) => {
        let newExerciseActivities = [];

        const existsExerciseActivity = exerciseActivities.find(
            (exerciseActivity) =>
                exerciseActivity.id === seletedExerciseActivity.id
        );

        if (!existsExerciseActivity) {
            newExerciseActivities = [
                ...exerciseActivities,
                seletedExerciseActivity,
            ];
        } else {
            const rest = exerciseActivities.filter(
                (exerciseActivity) =>
                    exerciseActivity.id !== seletedExerciseActivity.id
            );

            existsExerciseActivity.timeRequired =
                existsExerciseActivity.timeRequired +
                seletedExerciseActivity.timeRequired;

            newExerciseActivities = [...rest, existsExerciseActivity];
        }
        setExerciseActivities(newExerciseActivities);
    };
    console.log(exerciseActivities);
    return (
        <div className="fitness-club-area">
            <Row className="m-0">
                <Col lg={9} className="px-10 mt-5">
                    <Exercise
                        exercises={fitnessActivities}
                        handleAddList={handleAddList}
                    />
                </Col>
                <Col lg={3} className="pe-0 h-100 sticky-position">
                    <Profile exerciseActivities={exerciseActivities} />
                </Col>
            </Row>
        </div>
    );
};

export default FitnessClub;

import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { addToBreakTimeLocalStorage } from "../../utilities/localStorage";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";
import ToastAlert from "../ToastAlert/ToastAlert";
import "./FitnessClub.css";

const FitnessClub = () => {
    const [fitnessActivities, setFitnessActivities] = useState([]);
    const [exerciseActivities, setExerciseActivities] = useState([]);
    const [breakTime, setBreakTime] = useState(0);
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    useEffect(() => {
        fetch("fitnessActivities.JSON")
            .then((res) => res.json())
            .then((data) => setFitnessActivities(data));
    }, []);

    useEffect(() => {
        const storeBreakTime = addToBreakTimeLocalStorage();
        setBreakTime(storeBreakTime);
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

    const handleAddToBreak = (seletedBreakTime) => {
        setBreakTime(seletedBreakTime);
        addToBreakTimeLocalStorage(seletedBreakTime);
    };
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
                    <Profile
                        exerciseActivities={exerciseActivities}
                        handleAddToBreak={handleAddToBreak}
                        breakTime={breakTime}
                        toggleShow={toggleShow}
                        show={show}
                    />
                </Col>
            </Row>
            <ToastAlert show={show} toggleShow={toggleShow} />
        </div>
    );
};

export default FitnessClub;

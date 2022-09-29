import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Exercise from "../Exercise/Exercise";
import Profile from "../Profile/Profile";
import "./FitnessClub.css";

const FitnessClub = () => {
    const [fitnessActivities, setFitnessActivities] = useState([]);

    useEffect(() => {
        fetch("fitnessActivities.JSON")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setFitnessActivities(data)
            });
    }, []);

    const handleAddList = (exercise) => {
        console.log(exercise)
    }

    return (
        <div className="fitness-club-area">
            <Row className="m-0">
                <Col lg={9} className="px-10 mt-5">
                    <Exercise exercises={fitnessActivities} handleAddList={handleAddList}/>
                </Col>
                <Col lg={3} className="pe-0 h-100 sticky-position">
                    <Profile />
                </Col>
            </Row>
        </div>
    );
};

export default FitnessClub;

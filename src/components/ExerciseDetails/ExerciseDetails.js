import React from "react";
import "./ExerciseDetails.css";

const ExerciseDetails = ({ exerciseActivities, breakTime }) => {
    const calculateTotalExerciseActivitiesTime = () => {
        const totalTimes = exerciseActivities.reduce((acc, cur) => {
            return acc + cur.timeRequired;
        }, 0);
        return totalTimes;
    };
    return (
        <div className="exercise-details mt-5">
            <h2 className="exercise-details-title mb-3">Exercise Details</h2>
            <div className="exercise-time">
                <h3>Exercise time</h3>
                <p>{calculateTotalExerciseActivitiesTime()} seconds</p>
            </div>
            <div className="exercise-break-time">
                <h3>Break time</h3>
                <p>{breakTime} seconds</p>
            </div>
        </div>
    );
};

export default ExerciseDetails;

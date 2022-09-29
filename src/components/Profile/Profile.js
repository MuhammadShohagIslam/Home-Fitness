import React from "react";
import ActivityAlert from "../ActivityAlert/ActivityAlert";
import AddToBreak from "../AddToBreak/AddToBreak";
import ExerciseDetails from "../ExerciseDetails/ExerciseDetails";
import UserProfile from "../UserProfile/UserProfile";
import "./Profile.css";

const Profile = ({ exerciseActivities, breakTime, handleAddToBreak,toggleShow,show }) => {
    return (
        <>
            <div className="profile-area">
                <UserProfile />
                <AddToBreak
                    breakTime={breakTime}
                    handleAddToBreak={handleAddToBreak}
                />
                <ExerciseDetails
                    exerciseActivities={exerciseActivities}
                    breakTime={breakTime}
                />

               <ActivityAlert toggleShow={toggleShow} show={show}/>
            </div>
        </>
    );
};

export default Profile;

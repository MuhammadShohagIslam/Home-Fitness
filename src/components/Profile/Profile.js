import React from "react";
import "./Profile.css";
import ProfileImg from "../../img/Avatar.png";

const Profile = () => {
    return (
        <>
            <div className="profile-area">
                <div className="profile-top-wrapper">
                    <div className="profile-img">
                        <img src={ProfileImg} alt="Profile" />
                    </div>
                    <div className="profile-info ms-3">
                        <h2 className="mb-2">Muhammad Islam</h2>
                        <p>Full-Stack-Developer</p>
                    </div>
                </div>
                <div className="profile-details mt-4">
                    <div className="profile-details-info">
                        <p className="mb-1">
                            <span>75</span>kg
                        </p>
                        <p>Weight</p>
                    </div>
                    <div className="profile-details-info">
                        <p className="mb-1">65</p>
                        <p>Height</p>
                    </div>
                    <div className="profile-details-info">
                        <p className="mb-1">
                            <span>25</span>yrs
                        </p>
                        <p>Age</p>
                    </div>
                </div>

                <div className="add-to-break mt-5">
                    <h2 className="add-to-break-title mb-3">Add A Break</h2>

                    <ul className="add-to-break-list">
                        <li>
                            10<span>s</span>
                        </li>
                        <li>
                            20<span>s</span>
                        </li>
                        <li>
                            30<span>s</span>
                        </li>
                        <li>
                            40<span>s</span>
                        </li>
                        <li>
                            50<span>s</span>
                        </li>
                    </ul>
                </div>
                <div className="exercise-details mt-5">
                    <h2 className="exercise-details-title mb-3">
                        Exercise Details
                    </h2>
                    <div className="exercise-time">
                        <h3>Exercise time</h3>
                        <p>200 seconds</p>
                    </div>
                    <div className="exercise-break-time">
                        <h3>Break time</h3>
                        <p>200 seconds</p>
                    </div>
                </div>

                <div className="activities-completed mt-5">
                    <button type="button" className="w-100">
                        Activity Completed
                    </button>
                </div>
            </div>
        </>
    );
};

export default Profile;

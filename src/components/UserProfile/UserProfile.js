import React from "react";
import "./UserProfile.css";
import ProfileImg from "../../img/Avatar.png";

const UserProfile = () => {
    return (
        <>
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
                    <h5 className="mb-2">
                        <span>75</span>
                        <sub>kg</sub>
                    </h5>
                    <p className="mb-0">Weight</p>
                </div>
                <div className="profile-details-info">
                    <h5 className="mb-2">65</h5>
                    <p className="mb-0">Height</p>
                </div>
                <div className="profile-details-info">
                    <h5 className="mb-2">
                        <span>25</span>
                        <sub>yrs</sub>
                    </h5>
                    <p className="mb-0">Age</p>
                </div>
            </div>
        </>
    );
};

export default UserProfile;

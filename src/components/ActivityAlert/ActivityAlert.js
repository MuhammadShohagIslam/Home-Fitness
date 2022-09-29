import React from "react";
import "./ActivityAlert.css";
import Button from "react-bootstrap/Button";

const ActivityAlert = ({ toggleShow, show }) => {
    return (
        <div className="activities-completed mt-5">
            <Button
                type="button"
                onClick={() => toggleShow(!show)}
                className="w-100"
            >
                Activity Completed
            </Button>
        </div>
    );
};

export default ActivityAlert;

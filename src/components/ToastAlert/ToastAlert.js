import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import "./ToastAlert.css";

const ToastAlert = ({ show, toggleShow }) => {
    return (
        <ToastContainer position="middle-end">
            <Toast show={show} onClose={toggleShow}>
                <Toast.Header>
                    <h6 className="me-auto text-dark mb-0">
                        Activity Completed
                    </h6>
                </Toast.Header>
            </Toast>
        </ToastContainer>
    );
};

export default ToastAlert;

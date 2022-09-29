import React from "react";
import "./AddToBreak.css";

const AddToBreak = ({ breakTime, handleAddToBreak }) => {
    return (
        <div className="add-to-break mt-5">
            <h2 className="add-to-break-title mb-3">Add A Break</h2>

            <ul className="add-to-break-list">
                <li
                    className={breakTime === 10 && "active-add-to-break-list"}
                    onClick={() => handleAddToBreak(10)}
                >
                    10<span>s</span>
                </li>
                <li
                    className={breakTime === 20 && "active-add-to-break-list"}
                    onClick={() => handleAddToBreak(20)}
                >
                    20<span>s</span>
                </li>
                <li
                    className={breakTime === 30 && "active-add-to-break-list"}
                    onClick={() => handleAddToBreak(30)}
                >
                    30<span>s</span>
                </li>
                <li
                    className={breakTime === 40 && "active-add-to-break-list"}
                    onClick={() => handleAddToBreak(40)}
                >
                    40<span>s</span>
                </li>
                <li
                    className={breakTime === 50 && "active-add-to-break-list"}
                    onClick={() => handleAddToBreak(50)}
                >
                    50<span>s</span>
                </li>
            </ul>
        </div>
    );
};

export default AddToBreak;

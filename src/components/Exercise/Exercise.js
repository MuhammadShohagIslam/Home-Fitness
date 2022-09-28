import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Exercise = () => {
    return (
        <div className="exercise-area">
            <h2>Home-Fitness-Club</h2>
            <p>Select today’s exercise</p>

            <div className="exercises">
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Dumble</Card.Title>
                        <Card.Text>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint
                        </Card.Text>
                        <Card.Text>
                            <span>For Age</span> : 20-25
                        </Card.Text>
                        <Card.Text>
                            <span>Time required</span> : 30s
                        </Card.Text>
                        <Button variant="primary">Add To List</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Exercise;

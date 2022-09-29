import React from "react";
import "./Exercise.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Img from "../../img/chest.jpg";

const Exercise = () => {
    return (
        <div className="exercise-area">
            <h2 className="section-title mb-4">
                <span className="me-3">
                    <FontAwesomeIcon icon={faDumbbell} />
                </span>
                Home-Fitness-Club
            </h2>
            <p className="section-description mb-4">Select today’s exercise</p>

            <div className="exercises-wrapper">
                <Row>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={Img} />
                            <Card.Body>
                                <Card.Title>Dumble</Card.Title>
                                <Card.Text>
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint
                                </Card.Text>
                                <Card.Text className="mb-2">
                                    For Age :{" "}
                                    <span className="person-age">20-25</span>
                                </Card.Text>
                                <Card.Text>
                                    Time required :{" "}
                                    <span className="workout-time"> 30s</span>
                                </Card.Text>
                                <Button>Add To List</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={Img} />
                            <Card.Body>
                                <Card.Title>Dumble</Card.Title>
                                <Card.Text>
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint
                                </Card.Text>
                                <Card.Text className="mb-2">
                                    For Age :{" "}
                                    <span className="person-age">20-25</span>
                                </Card.Text>
                                <Card.Text>
                                    Time required :{" "}
                                    <span className="workout-time"> 30s</span>
                                </Card.Text>
                                <Button variant="primary">Add To List</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src={Img} />
                            <Card.Body>
                                <Card.Title>Dumble</Card.Title>
                                <Card.Text>
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint
                                </Card.Text>
                                <Card.Text className="mb-2">
                                    For Age :{" "}
                                    <span className="person-age">20-25</span>
                                </Card.Text>
                                <Card.Text>
                                    Time required :{" "}
                                    <span className="workout-time"> 30s</span>
                                </Card.Text>
                                <Button variant="primary">Add To List</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Exercise;

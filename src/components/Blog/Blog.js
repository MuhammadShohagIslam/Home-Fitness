import React from "react";
import "./Blog.css";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
    return (
        <Accordion defaultActiveKey="0" flush className="pb-5 mt-4">
            <Accordion.Item eventKey="0">
                <Accordion.Header>How does react work</Accordion.Header>
                <Accordion.Body>
                    React uses a declarative model that makes it easier to
                    reason about your application and aims to be efficient and
                    flexible. It designs simple views for each state of your
                    application, and React will effectively update and render
                    the appropriate component as your data changes.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    What are the difference between Props and State
                </Accordion.Header>
                <Accordion.Body>
                    Props are used to pass data from one component to another.
                    State is a component-only local data storage and cannot be
                    passed to other components.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    useEffect use case except use of fetch data
                </Accordion.Header>
                <Accordion.Body>
                    Execute on state change: input field validation Execute on
                    state change: direct filter Execute on state change: trigger
                    animation on new array value Run on prop changes: update the
                    list of fragments about updating fetched API data
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;

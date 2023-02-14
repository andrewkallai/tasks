import React from "react";
import "./App.css";
import logo from "./logo192.png";
import { Button, Container, Col, Row } from "react-bootstrap";

console.log(logo);

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Header</h1>
            <img src={logo} alt="None" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Andrew. Hello World
            </p>
            <ul>
                <li>one element</li>
                <li>two element</li>
                <li>three element</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First column.
                        {<div className="Rectangles"></div>}
                    </Col>
                    <Col>
                        Second column.
                        {<div className="Rectangles"></div>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

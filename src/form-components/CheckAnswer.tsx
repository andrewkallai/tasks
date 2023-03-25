import React, { useState } from "react";
import Form from "react-bootstrap/Form";
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                <Form.Label>
                    <h3>Check Answer</h3>
                </Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            {answer === expectedAnswer ? (
                <div style={{ fontSize: 40 }}>✔️</div>
            ) : (
                <div style={{ fontSize: 40 }}>❌</div>
            )}
        </div>
    );
}

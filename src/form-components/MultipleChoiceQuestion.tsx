import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    const updateChoice = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        setChoice(event.target.value);
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {choice === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}

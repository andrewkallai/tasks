import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question_type, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    const changeType = (): void => {
        if (question_type === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    };
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {question_type === "short_answer_question" ? (
                <div>Short Answer</div>
            ) : (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}

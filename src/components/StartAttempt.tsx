import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    const changeAttempts = (integer: number): void => {
        setAttempts(numAttempts + integer);
    };
    const changeProgress = (value: boolean): void => {
        setProgress(value);
    };
    return (
        <div>
            <div>
                <Button
                    onClick={(): void => {
                        changeAttempts(-1);
                        changeProgress(true);
                    }}
                    disabled={progress || !numAttempts}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={(): void => {
                        changeProgress(false);
                    }}
                    disabled={!progress}
                >
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button
                    onClick={(): void => {
                        changeAttempts(1);
                    }}
                    disabled={progress}
                >
                    Mulligan
                </Button>
                {numAttempts}
            </div>
        </div>
    );
}

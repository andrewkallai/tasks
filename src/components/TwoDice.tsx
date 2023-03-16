import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left_value, setLeft] = useState<number>(0);
    const [right_value, setRight] = useState<number>(-1);
    const winLose = () => {
        return left_value === 1 ? <div>Lose</div> : <div>Win</div>;
    };
    return (
        <div>
            <Button onClick={(): void => setLeft(d6())}>Roll Left</Button>
            <span data-testid="left-die">{left_value}</span>
            <div>
                <Button onClick={(): void => setRight(d6())}>Roll Right</Button>
                <span data-testid="right-die">{right_value}</span>
            </div>
            {left_value === right_value ? winLose() : <div></div>}
        </div>
    );
}

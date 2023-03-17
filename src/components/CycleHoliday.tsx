import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Presidents Day"
        | "Holi"
        | "Easter Sunday"
        | "Independence Day"
        | "Labor Day";
    const [holiday, setHoliday] = useState<Holiday>("Presidents Day");
    const NEXT_CALENDAR_HOLIDAY: Record<Holiday, Holiday> = {
        "Presidents Day": "Holi",
        Holi: "Easter Sunday",
        "Easter Sunday": "Independence Day",
        "Independence Day": "Labor Day",
        "Labor Day": "Presidents Day"
    };
    const NEXT_ALPHABET_HOLIDAY: Record<Holiday, Holiday> = {
        "Easter Sunday": "Holi",
        Holi: "Independence Day",
        "Independence Day": "Labor Day",
        "Labor Day": "Presidents Day",
        "Presidents Day": "Easter Sunday"
    };
    const EMOJI_SELECTION: Record<Holiday, JSX.Element> = {
        "Presidents Day": <h3>Holiday: &#x1F1FA;&#x1F1F8;</h3>,
        Holi: <h3>Holiday: &#x2728;</h3>,
        "Easter Sunday": <h3>Holiday: &#x271D;</h3>,
        "Independence Day": <h3>Holiday: &#x1F386;</h3>,
        "Labor Day": <h3>Holiday: &#x1F388;</h3>
    };
    return (
        <div>
            <Button onClick={() => setHoliday(NEXT_CALENDAR_HOLIDAY[holiday])}>
                Advance by Year
            </Button>
            <Button onClick={() => setHoliday(NEXT_ALPHABET_HOLIDAY[holiday])}>
                Advance by Alphabet
            </Button>
            {EMOJI_SELECTION[holiday]}
        </div>
    );
}

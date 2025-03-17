import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    enum Holiday {
        Christmas = "🎄",
        Halloween = "🎃",
        IndependenceDay = "🎆",
        NewYear = "🎉",
        Thanksgiving = "🦃",
    }

    const [holiday, setHoliday] = useState<Holiday>(Holiday.NewYear);

    function nextAlphabet(holiday: Holiday): Holiday {
        return {
            [Holiday.Christmas]: Holiday.Halloween,
            [Holiday.Halloween]: Holiday.IndependenceDay,
            [Holiday.IndependenceDay]: Holiday.NewYear,
            [Holiday.NewYear]: Holiday.Thanksgiving,
            [Holiday.Thanksgiving]: Holiday.Christmas,
        }[holiday];
    }

    function nextYear(holiday: Holiday): Holiday {
        return {
            [Holiday.NewYear]: Holiday.IndependenceDay,
            [Holiday.IndependenceDay]: Holiday.Thanksgiving,
            [Holiday.Thanksgiving]: Holiday.Halloween,
            [Holiday.Halloween]: Holiday.Christmas,
            [Holiday.Christmas]: Holiday.NewYear,
        }[holiday];
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button
                onClick={() => {
                    setHoliday(nextAlphabet(holiday));
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextYear(holiday));
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}

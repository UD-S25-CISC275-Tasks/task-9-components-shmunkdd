import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    setValue,
}: {
    setValue: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue((prevValue) => 2 * prevValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    setValue,
}: {
    setValue: (newValue: number) => void;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue((prevValue) => 0.5 * prevValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10); // Correctly place useState inside the component

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setValue={setDhValue} />
            <Halver setValue={setDhValue} />
        </div>
    );
}

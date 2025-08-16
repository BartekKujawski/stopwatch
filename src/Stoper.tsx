import { useEffect, useState } from 'react';
import { Button } from './Button';
import { FullTime } from './FullTime';
import { LapTime } from './LapTime';

const Stoper = () => {
    const [fullTime, setFullTime] = useState(0);
    const [lapTime, setLapTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setFullTime((prevTime) => prevTime + 1);
                setLapTime((prevTime) => prevTime + 1);
            }, 100);

            return () => {
                clearInterval(interval);
            };
        }
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setFullTime(0);
        setLapTime(0);
    };

    const handleLap = () => {
        setLapTime(0);
    };

    return (
        <>
            <FullTime time={fullTime} />
            <LapTime time={lapTime} />
            <Button label='start' callback={handleStart} />
            <Button label='stop' callback={handleStop} />
            <Button label='reset' callback={handleReset} />
            <Button label='lap' callback={handleLap} />
        </>
    );
};

export { Stoper };

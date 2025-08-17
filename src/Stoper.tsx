import { useEffect, useState } from 'react';
import { Button } from './Button';
import { FullTime } from './FullTime';
import { LapTime } from './LapTime';
import { Table } from './Table';

type NewRecord = {
    lap: number;
    time: string;
};

const Stoper = () => {
    const [fullTime, setFullTime] = useState(0);
    const [lapTime, setLapTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [whichLap, setWhichLap] = useState(1);
    const [records, setRecords] = useState<NewRecord[]>([]);

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

    const formatTime = (time: number) => {
        const min = ('0' + (Math.floor(time / 600) % 60)).slice(-2);
        const sec = ('0' + (Math.floor(time / 10) % 60)).slice(-2);
        const ms = ('0' + Math.floor(time) * 10).slice(-2);

        return `${min}:${sec}:${ms}`;
    };

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setFullTime(0);
        setLapTime(0);
        setWhichLap(1);
        setRecords([]);
    };

    const handleLap = () => {
        setRecords((prevRecords) => [
            ...prevRecords,
            { lap: whichLap, time: formatTime(lapTime) },
        ]);
        setWhichLap((prevLap) => prevLap + 1);
        setLapTime(0);
    };

    return (
        <>
            <FullTime time={formatTime(fullTime)} />
            <LapTime time={formatTime(lapTime)} />
            <Table records={records} />
            <Button label='start' callback={handleStart} />
            <Button label='stop' callback={handleStop} />
            <Button label='reset' callback={handleReset} />
            <Button label='lap' callback={handleLap} />
        </>
    );
};

export { Stoper };

import { useEffect, useState } from 'react';
import { Button } from './Button';
import { FullTime } from './FullTime';
import { LapTime } from './LapTime';
import { Table } from './Table';
import { Summary } from './Summary';

type NewRecord = {
    lap: number;
    time: string;
};

const Stoper = () => {
    const [fullTime, setFullTime] = useState(0);
    const [lapTime, setLapTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [whichLap, setWhichLap] = useState(0);
    const [records, setRecords] = useState<NewRecord[]>([]);
    const [everyTime, setEveryTime] = useState<number[]>([]);

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
        setWhichLap((prevLap) => prevLap + 1);
    };

    const handleStop = () => {
        setRecords((prevRecords) => [
            ...prevRecords,
            { lap: whichLap, time: formatTime(lapTime) },
        ]);
        setEveryTime((prevTime) => [...prevTime, lapTime]);
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
        setEveryTime((prevTime) => [...prevTime, lapTime]);
        setWhichLap((prevLap) => prevLap + 1);
        setLapTime(0);
    };

    const checkIsRunning = () => {
        if (isRunning || !fullTime) {
            return (
                <>
                    {' '}
                    <FullTime time={formatTime(fullTime)} />
                    <LapTime time={formatTime(lapTime)} />
                    {/* <Table records={records} /> */}
                </>
            );
        }
        let sum = 0;
        everyTime.forEach((time) => (sum += time));
        return (
            <Summary
                fullTime={formatTime(fullTime)}
                avgTime={formatTime(sum / everyTime.length)}
                bestTime={formatTime(Math.min(...everyTime))}
                worstTime={formatTime(Math.max(...everyTime))}
                laps={whichLap}
            />
        );
    };

    return (
        <>
            <main className='main'>{checkIsRunning()}</main>
            <section className='buttons'>
                <Button label='start' callback={handleStart} />
                <Button label='stop' callback={handleStop} />
                <Button label='reset' callback={handleReset} />
                <Button label='lap' callback={handleLap} />
            </section>
            {isRunning || !fullTime ? <Table records={records} /> : <></>}
        </>
    );
};

export { Stoper };

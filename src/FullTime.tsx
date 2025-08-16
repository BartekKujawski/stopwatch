import { useEffect, useState } from 'react';

const FullTime = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const fullTime = () => {
        const minutes = Math.floor(counter / 10 / 60);
        const seconds = Math.floor((counter / 10) % 60);
        const miliseconds = ((counter * 100) / 10) % 100;
        const time = `${minutes < 10 ? '0' + minutes : minutes}:${
            seconds < 10 ? '0' + seconds : seconds
        }:${miliseconds < 10 ? '0' + miliseconds : miliseconds}`;

        return time;
    };

    return <div>{fullTime()}</div>;
};

export { FullTime };

type LapTimeProps = {
    time: string;
};

const LapTime = ({ time }: LapTimeProps) => {
    return <div className='lap-time timer'>{time}</div>;
};

export { LapTime };

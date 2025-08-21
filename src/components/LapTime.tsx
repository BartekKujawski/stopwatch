type LapTimeProps = {
    time: string;
};

const LapTime = ({ time }: LapTimeProps) => {
    return (
        <div className='lap-time times'>
            <span className='name'>Czas okrążenia:</span>{' '}
            <span className='timer'>{time}</span>
        </div>
    );
};

export { LapTime };

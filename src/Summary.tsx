type SummaryProps = {
    fullTime: string;
    avgTime: string;
    bestTime: string;
    worstTime: string;
    laps: number;
};

const Summary = ({
    fullTime,
    avgTime,
    bestTime,
    worstTime,
    laps,
}: SummaryProps) => {
    return (
        <section className='summary'>
            <div className='full-time-sum'>{fullTime}</div>
            <div className='avg-time'>{avgTime}</div>
            <div className='best-time'>{bestTime}</div>
            <div className='worst-time'>{worstTime}</div>
            <div className='laps-quantity'>{laps}</div>
        </section>
    );
};

export { Summary };

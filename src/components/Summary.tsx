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
            <div className='full-time-sum'>
                <span className='label'>Całkolwity czas: </span>
                <span className='time'>{fullTime}</span>
            </div>
            <div className='avg-time'>
                <span className='label'>Średni czas okrążenia: </span>
                <span className='time'>{avgTime}</span>
            </div>
            <div className='best-time'>
                <span className='label'>Najlepsze okrążenie: </span>
                <span className='time'>{bestTime}</span>
            </div>
            <div className='worst-time'>
                <span className='label'>Najgorsze okrążenie: </span>
                <span className='time'>{worstTime}</span>
            </div>
            <div className='laps-quantity'>
                <span className='label'>Liczba okrążeń: </span>
                <span className='time'>{laps}</span>
            </div>
        </section>
    );
};

export { Summary };

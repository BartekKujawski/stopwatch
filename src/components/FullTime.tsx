type FullTimeProps = {
    time: string;
};

const FullTime = ({ time }: FullTimeProps) => {
    return (
        <div className='full-time times'>
            <span className='name'>Czas całkowity:</span>{' '}
            <span className='timer'>{time}</span>
        </div>
    );
};

export { FullTime };

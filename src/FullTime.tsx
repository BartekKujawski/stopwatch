type FullTimeProps = {
    time: string;
};

const FullTime = ({ time }: FullTimeProps) => {
    return <div className='full-time timer'>{time}</div>;
};

export { FullTime };

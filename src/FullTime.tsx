type FullTimeProps = {
    time: number;
};

const FullTime = ({ time }: FullTimeProps) => {
    const formatTime = () => {
        const min = ('0' + (Math.floor(time / 600) % 60)).slice(-2);
        const sec = ('0' + (Math.floor(time / 10) % 60)).slice(-2);
        const ms = ('0' + Math.floor(time) * 10).slice(-2);

        return `${min}:${sec}:${ms}`;
    };

    return <div className='full-time timer'>{formatTime()}</div>;
};

export { FullTime };

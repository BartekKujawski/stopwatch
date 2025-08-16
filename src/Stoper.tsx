import { Button } from './Button';
import { FullTime } from './FullTime';
import { LapTime } from './LapTime';

const Stoper = () => {
    return (
        <>
            <FullTime />
            <LapTime />
            <Button name='start' />
            <Button name='stop' />
            <Button name='reset' />
            <Button name='lap' />
        </>
    );
};

export { Stoper };

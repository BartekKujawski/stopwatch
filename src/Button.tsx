type ButtonProps = {
    name: string;
    callback: (what: string) => void;
};

const Button = ({ name }: ButtonProps) => {
    const startBtn = () => {
        // callback('start')
    }
    const stopBtn = () => {

    }
    const resetBtn = () => {

    }
    const lapBtn = () => {

    }
    
    const actionChooser = () => {
        switch (name){
            case "start":
                return startBtn;
            case "stop":
                return stopBtn;
            case "reset":
                return resetBtn;
            case "lap":
                return lapBtn;
        }
    }
    
    return <button className={name} onClick={actionChooser()}>{name.toUpperCase()}</button>;
};

export { Button };

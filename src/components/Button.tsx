type ButtonProps = {
    label: string;
    callback: () => void;
};

const Button = ({ label, callback }: ButtonProps) => {
    return (
        <button className={label} onClick={() => callback()}>
            {label.toUpperCase()}
        </button>
    );
};

export { Button };

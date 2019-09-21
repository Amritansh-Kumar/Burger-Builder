import React from 'react';

import classes from './Button.module.css';

interface ButtonProps {
    btnType: string,
    clicked: Function
}

const button: React.FC<ButtonProps> = (props: any) => {
    return (
        <button
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
};

export default button;

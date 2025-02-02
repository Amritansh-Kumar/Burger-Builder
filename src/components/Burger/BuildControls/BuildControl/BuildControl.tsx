import React from 'react';

import classes from './BuildControl.module.css'

interface BuildControlProps {
    key: string
    label: string,
    type: string,
    addMore: Function,
    remove: Function,
    disabled:boolean
}

const buildControl: React.FC<BuildControlProps> = (props: any) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                className={classes.Less}
                onClick={props.remove}
                disabled={props.disabled}
            >Less</button>
            <button className={classes.More} onClick={props.addMore}>More</button>
        </div>
    )
};

export default buildControl;

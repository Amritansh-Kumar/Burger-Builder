import React from 'react';

import classes from './Backdrop.module.css';

interface BackdropProps {
    show: boolean,
    clickBackdrop: Function
}

const backdrop: React.FC<BackdropProps> = (props: any) => {
    return props.show ? <div className={classes.Backdrop} onClick={props.clickBackdrop}></div> : null;
};

export default backdrop;

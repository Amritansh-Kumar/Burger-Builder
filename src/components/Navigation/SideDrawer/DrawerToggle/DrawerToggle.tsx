import React from 'react';

import classes from './DrawerToggle.module.css';

interface DrawerToggleProps {
    clicked: Function
}

const drawerToggle: React.FC<DrawerToggleProps> = (props: any) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;

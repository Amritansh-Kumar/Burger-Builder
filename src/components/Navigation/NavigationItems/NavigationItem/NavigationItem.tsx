import React from 'react';

import classes from './NavigationItem.module.css';

interface NavigationItemProps {
    active?: boolean,
    link: string
}

const navigatioinItem: React.FC<NavigationItemProps> = (props: any) => (
    <li className={classes.NavigationItem}>
        <a
            href={props.link}
            className={props.active ? classes.active : undefined}
        >
            {props.children}
        </a>
    </li>
);

export default navigatioinItem;

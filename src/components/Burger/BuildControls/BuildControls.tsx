import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

interface BurgerControlsProps {
    addIngredient: Function,
    removeIngredient: Function,
    disabledInfo: Object,
    price: Number,
    purchasable: boolean
}

const buildControls: React.FC<BurgerControlsProps> = (props: any) => {
    return (
        <div className={classes.BuildControls}>
            <p>CurrentPrice: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl =>
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    type={ctrl.type}
                    addMore={() => props.addIngredient(ctrl.type)}
                    remove={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disabledInfo[ctrl.type]}
                />
            )}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
            >
                ORDER NOW
            </button>
        </div>
    )
};

export default buildControls;

import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button'

interface OrderSummaryProps {
    ingredients: Object,
    cancelPurchase: Function,
    continuePurchase: Function,
    price: Number
}

const orderSummary: React.FC<OrderSummaryProps> = (props: any) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {igKey}
                </span>
                : {props.ingredients[igKey]}
            </li>
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with following Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType={"Danger"} clicked={props.cancelPurchase}>CANCEL</Button>
            <Button btnType={"Success"} clicked={props.continuePurchase}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;

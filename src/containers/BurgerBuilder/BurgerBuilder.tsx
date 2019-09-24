import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as endpoints from '../../endpoints';

import axios from 'axios';

const INGREDIENT_PRICING = {
    salad: 0.5,
    bacon: 0.8,
    cheese: 0.7,
    meat: 1.5
};

enum BurgerState {
    salad,
    bacon,
    cheese,
    meat
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    };

    addIngredientHandler = (type: keyof typeof BurgerState) => {
        const newCount = this.state.ingredients[type] + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = newCount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICING[type];

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients, purchasable: (newPrice > 4)});
    };


    removeIngredientHandler = (type: keyof typeof BurgerState) => {
        const newCount = this.state.ingredients[type] - 1;
        if (newCount < 0) {
            return;
        }
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = newCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICING[type];

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients, purchasable: (newPrice > 4)});
    };

    purchaseHandler = () => {
        this.setState({purchasing: true})
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    };

    purchaseContinueHandler = () => {
        // alert("Continue Your Purchase")
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Insane',
                address: {
                    street: "221B Bakers Street",
                    zipcode: "12345",
                    country: "India"
                },
                email: "insane@gmail.com"
            },
            deliveryMethod: 'fastest'
        };

        const url = endpoints.firebase + 'orders.json';
        axios.post(url, order)
            .then(response => {
                this.setState({loading: true, purchasing: false});
            })
            .catch(err => {
                this.setState({loading: true, purchasing: false});
            })
    };

    render() {
        const disabledInfo = {
            salad: false,
            bacon: false,
            cheese: false,
            meat: false
        };

        let key: keyof typeof BurgerState;
        for (key in disabledInfo) {
            disabledInfo[key] = this.state.ingredients[key] <= 0;
        }

        let orderSummary = (<OrderSummary
            ingredients={this.state.ingredients}
            cancelPurchase={this.purchaseCancelHandler}
            continuePurchase={this.purchaseContinueHandler}
            price={this.state.totalPrice}
        />);
        if (this.state.loading) {
            orderSummary = <Spinner/>
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} closeModal={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;

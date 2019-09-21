import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';

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
        purchasable: false
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

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;

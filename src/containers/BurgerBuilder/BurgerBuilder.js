import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    salad: 0.3,
    bacon: 0.9,
    cheese: 0.8,
    meat: 1.2
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        },
        basePrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedPrice = this.state.basePrice + INGREDIENTS_PRICES[type];
        // copying state.ingredients
        const updatedIngredients = {
            ...this.state.ingredients
        };
        // update particular ingredient with new number
        updatedIngredients[type] = updatedCount;

        // update state
        this.setState({
            ingredients: updatedIngredients,
            basePrice: updatedPrice
        });
        console.log(this.state);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }

        const currentCount = this.state.ingredients[type];
        const updatedCount = currentCount - 1;
        const updatedPrice = this.state.basePrice - INGREDIENTS_PRICES[type];
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        this.setState({
            ingredients: updatedIngredients,
            basePrice: updatedPrice
        });
    }

    render() {
        // disable button checker
        const disabledInfo = {
            ...this.state.ingredients
        }
        // check if each value less or equal to zero and sign 'true' or 'false' to a key
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addHandler={this.addIngredientHandler}
                    removeHandler={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                />
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;

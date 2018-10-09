import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
    salad: 0.3,
    bacon: 0.9,
    cheese: 0.8,
    meat: 1.2
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        basePrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState = (ingredients) => {
        //create new array of keys and calculate sum of all values
        const sum = Object.keys(ingredients)
            .map( (key, i) => {
                return ingredients[key];
            })
            .reduce( (sum, el) => {
                return sum + el;
            }, 0);

            this.setState({
                purchasable: sum > 0
            });
    };

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
        // pass updatedIngredients array to updatePurchaseState method
        this.updatePurchaseState(updatedIngredients);
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
        this.updatePurchaseState(updatedIngredients);
    }
// show modal when click on Order Now button
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue');
    }

    render() {
        // disabled button checker
        const disabledInfo = {
            ...this.state.ingredients
        }
        // check if each value less or equal to zero and sign 'true' or 'false' to a key
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <React.Fragment>
                <Modal showModal={this.state.purchasing}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.basePrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addHandler={this.addIngredientHandler}
                    removeHandler={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.basePrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.purchaseHandler}
                />
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;

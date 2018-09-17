import React, {Component} from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // to extract keys as an array from Ingredients object use Object.keys()
    const transformedIngredients = Object.keys(props.ingredients)
    // iterate through array of key strings ['salad', 'meat' etc]
        .map( ingredientKey => {
            // transform a key string into array based on value number
            // create a new Array and pass Value number from a Key, ex. Array(2)
            return [...Array(props.ingredients[ingredientKey])]
            // execute map() on each array and applay jxs
            .map((_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;

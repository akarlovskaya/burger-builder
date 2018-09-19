import React, {Component} from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // to extract keys as an array from Ingredients object use Object.keys()
    let transformedIngredients = Object.keys(props.ingredients)
    // iterate through array of key strings ['salad', 'meat' etc]
        .map( ingredientKey => {
            // transform a key string into array based on value number
            // create a new Array and pass Value number from a Key, ex. Array(2)
            return [...Array(props.ingredients[ingredientKey])]
            // execute map() on each array and apply jxs
            .map((_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
            });
        })
        // create one array with all ingredients in it
        .reduce( (arr, el) => {
            return arr.concat(el);
        }, []);

        // show text if there is no ingredients
        if ( transformedIngredients.length === 0 ) {
            transformedIngredients = "Please choose ingredients";
        }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;

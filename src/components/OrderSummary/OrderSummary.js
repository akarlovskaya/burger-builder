import React from 'react';

 const orderSummary = (props) => {
 // transform object of ingredients to array
     const ingredientsSummary = Object.keys(props.ingredients)
        .map( ingredientKey => {
            return <li key={ingredientKey}>{ingredientKey.toUpperCase()}: {props.ingredients[ingredientKey]}</li>
            // console.log(ingredientKey);
        } );
  return (
      <React.Fragment>
          <h3>Your Order</h3>
          <p>A delicious burger with the following ingredients:</p>
          <ul>
              {ingredientsSummary}
          </ul>
      </React.Fragment>
  );
}

export default orderSummary;

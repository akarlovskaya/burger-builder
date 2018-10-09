import React from 'react';
import Button from '../UI/Button/Button';


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
          <p>Continue to checkout?</p>
          <Button btnType="Danger"
                  clicked={props.purchaseCancelled}>CANCEL</Button>
          <Button btnType="Success"
                  clicked={props.purchaseContinued}>CONTINUE</Button>

      </React.Fragment>
  );
}

export default orderSummary;

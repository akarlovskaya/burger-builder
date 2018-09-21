import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

export const buildControls = (props) => {
    // console.log(!props.purchasable);
  return (
      <div className={classes.BuildControls}>
          <p>Current price: <strong>{props.price.toFixed(2)}<small>$</small></strong></p>
          { controls.map( controlItem => {
              return <BuildControl
                  key={controlItem.label}
                  label={controlItem.label}
                  add={ () => props.addHandler(controlItem.type) }
                  remove={ () => props.removeHandler(controlItem.type) }
                  disabled = {props.disabledInfo[controlItem.type]}
              />
          })
          }
          <button
              className={classes.OrderButton}
              // disabled={true} to make it disabled
              disabled={!props.purchasable}>Order now</button>
      </div>
  );
}

export default buildControls;

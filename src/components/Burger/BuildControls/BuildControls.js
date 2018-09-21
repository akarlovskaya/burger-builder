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
  return (
      <div className={classes.BuildControls}>
          { controls.map( controlItem => {
              return <BuildControl
                  key={controlItem.label}
                  label={controlItem.label}
                  add={ () => props.addHandler(controlItem.type) }
                  remove={ () => props.removeHandler(controlItem.type) }
              />
          })
          }
      </div>
  );
}

export default buildControls;

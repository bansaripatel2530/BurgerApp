import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'
const controls = [
    {label :"Salad" , type : "salad"},
    {label : "Bacon" , type : "bacon"},
    {label : "Meat" , type : "meat"},
    {label : "Cheese" , type : "cheese"},
]
const buildControls = (props) => (
    <div className = {classes.BuildControls}>
    <p>Current price:<strong>{props.price.toFixed(2)}</strong></p>
     {controls.map(ctrl => (
         <BuildControl key = {ctrl.label} 
                       label = {ctrl.label}
                       added = {() =>  props.addIngredient(ctrl.type)}
                       remove = {() => props.removeIngredient(ctrl.type)}
                       disable = {props.disable[ctrl.type]}/>
     ))}

     <button disabled = {!props.purchasable}
             onClick = {props.order}>ORDER NOW</button>
    </div>    
)

export default buildControls;
import React from 'react';
import Aux from '../../../hoc/AuxNew';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredientnew)
                                .map(igKey => {
                                    return  <li key = {igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredientnew[igKey]}
                                    </li>
                                })
    return(
        <Aux>

            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>  
            <p><strong>Total price:{props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType = "Danger" clicked = {props.danger}>Cancel</Button>
            <Button btnType = "Success" clicked = {props.success}>Continue</Button>

              

        </Aux>
    )

};


export default orderSummary;
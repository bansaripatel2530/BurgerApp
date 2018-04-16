import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngrediengt = Object.keys(props.ingredient)
                .map(igkey => {
                    return [...Array(props.ingredient[igkey])].map((_,i) => {
                        return <BurgerIngredient key = {igkey +1} type = {igkey}/>
                    }
                    )
                })
                .reduce((arr,el) => {
                    return arr.concat(el);
                },[])
                if(transformedIngrediengt.length === 0){
                    transformedIngrediengt =  <p>Please start adding ingredient</p>
                }
    return(
        <div className = {classes.Burger}>
            <BurgerIngredient type = "bread-top"/>
            {transformedIngrediengt}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    )
}
export default burger;
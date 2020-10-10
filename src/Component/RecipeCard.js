import React from 'react'
import '../css/RecipeCard.css'
import { useHistory } from "react-router-dom";

//
function RecipeCard(Recipe) {
    //
    const History=useHistory();
    console.log(Recipe)
    const makePayment=()=>{
        console.log(Recipe)
        History.push(`/${Recipe.Recipe.name}`)
    }
    
    return (
        
        <div className="recipecard">
        <img src={Recipe?.Recipe?.image} alt="recipecardImage" />
         <div className="recipecard__info">
         <p className="recipecard__title">{Recipe?.Recipe?.name}</p>
         <p className="recipecard__price">
         <small>₹</small>
         <strong>{Recipe?.Recipe?.price}</strong>
         </p>
         </div>
         <button className="recipecard__buttonResize" onClick={makePayment}>Buy</button>
        </div>
        
    )
}

export default RecipeCard

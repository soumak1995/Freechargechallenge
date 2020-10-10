import React,{useState} from 'react'
import { Card, CardContent, FormControl,MenuItem, Select} from '@material-ui/core';
import {useStateValue} from '../StateProvider'
import '../css/MakePayment.css'
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
function MakePayment(props) {
 
    const [{Recipes},dispatch]=useStateValue();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const name=props.match.params.id;
    let recipe = Recipes.find(o => o.name === name);
    console.log(recipe);
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className="makepayment">
            
            
               <Card>
                   <div className="makepayment__container">
                     
                     <img  className="makepayment__container__image" src={recipe?.image} alt="recipecardImage" />
                     
                     <div className="makepayment__container__info">
                      <h4 >{recipe?.name}</h4>
                        <p className="makepayment__container__price">
                         <small>₹</small>
                         <strong>{recipe?.price}</strong>
                        </p>
                        <p className="makepayment__container__description">
                            {recipe?.description}
                        </p>
                        </div>

                     </div>
                     <div className='makepayment__section'>
                    <div className="makepayment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="makepayment__details">
                            {/* Stripe magic will go */}

                            <form >
                                <CardElement onChange={handleChange}/>

                                <div className='makepayment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={recipe?.price}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button >
                                        <span>Buy Now</span>
                                    </button>
                                </div>
                               
                            </form>
                    </div>
                </div>
             
                </Card>
           
        </div>
    )
}

export default MakePayment

import React from 'react'
import {BrowserRouter ,Switch, Route } from 'react-router-dom'
import HomePage from '../Component/HomePage'
import Header from '../Component/Header'
import MakePayment from '../Component/MakePayment'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
function Router() {
    const promise=loadStripe('pk_test_51HQ8kBLuWZAF59GDmQqURmvCwP655il2R60Sc3YPR4qG2DmVWOZjSfCR2MFXls2lGc4xhoJUYkZIGGYviHcHUr1000I1plgW0d')
    return (
        <div>
            <BrowserRouter >
            <Header/>
            <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Elements stripe={promise}>
            <Route path="/:id" component={MakePayment} exact={true}/>
            </Elements>
             </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router

import React,{useEffect,useState} from 'react'
import {useStateValue} from '../StateProvider'
import axios from 'axios'
import RecipeCard from './RecipeCard'
import '../css/HomePage.css'
function HomePage() {

    const [{Recipes},dispatch]=useStateValue();
    const [Items,setItems]=useState([]);
     useEffect(()=>{
         async function fetchData(){
             const res=await axios.get('http://starlord.hackerearth.com/recipe')
             dispatch({type:'LOAD_RECIPES',payload:res.data})
             setItems(res.data)
         }
         fetchData();
        
    },[])
    console.log(Items);
 
    return (
        <div className="homepage">
            <div className="homepage_row">
            {
            Items.map((Recipe,index)=>(
            <RecipeCard
            key={index}
            Recipe={Recipe}
            />))}
            </div>
           
        </div>
    )
}

export default HomePage

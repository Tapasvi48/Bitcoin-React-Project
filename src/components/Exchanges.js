import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from '../index'
import Loading from "./Loading.js"
import "./Exchanges.css";
import Error from "./Error.js"
const Exchanges = () => {
const [Exchanges,SetExchanges]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(false);




useEffect(()=>{
const fetchExchange=async()=>{
try{
const {data}= await axios.get(`${server}/exchanges`);
// id name year country 
console.log(data);
SetExchanges(data);
setLoading(false);

}

catch(error){
  setError(true);
setLoading(false); 


}}
fetchExchange();
},[])

if(error){
  return <Error message={"Error while fetching"}/>
}



return(
  <div className='container'>
{loading?(<Loading/>):(<>

<div className='Ex'>
{Exchanges.map((i)=>(
<ExchangeCard name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} key={i.id}/>))}
</div>
</>)}
</div>);
}


const ExchangeCard=({name,img,rank,url})=>(
<div className='excard'>
<a href={url} target={"blank"}>
  <div className='card'>
  <img src={img}/>
  <h4>{rank}</h4>
  <p>{name}</p> 
   
  </div>
   </a>

   </div>



);
export default Exchanges;

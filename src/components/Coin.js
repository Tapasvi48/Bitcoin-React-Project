import React, { useEffect, useState } from 'react'
import axios from "axios"
import { server } from '../index'
import Loading from "./Loading.js"
import "./Coin.css";
import CoinCard from './CoinCard';
import { Button, HStack, Radio, RadioGroup } from '@chakra-ui/react';
const Coin = () => {
const [Coin,SetCoin]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(false);
const [page,setPage]=useState(1);
const [currency,SetCurrency]=useState("inr");
const currencySymbol=currency==="inr"?"₹":currency==="eur"?"€":"$";
const changePage=(page)=>{
setPage(page);
setLoading(true);
}
// pagination package krlo ya normal bna lo ("agr km he to")
const btns=new Array(132).fill(1);

useEffect(()=>{
const fetchCoin=async()=>{
try{
const {data}= await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
// id name year country 
SetCoin(data);
setLoading(false);

}

catch(error){
SetCoin(true);
setLoading(false); 


}}
fetchCoin();
},[currency,page])

if(error){
  return <coin message={"error fetch"}/>
}



return(
  <div className='container'>
{loading?(<Loading/>):(<>
<RadioGroup value={currency} onChange={SetCurrency} p={"8"}>
<HStack spacing={"4"}>
<Radio value={"inr"}>INR</Radio>
<Radio value={"usd"}>USD</Radio>
<Radio value={"eur"}>EUR</Radio>
</HStack>
</RadioGroup>
<div className='Ex'>
{Coin.map((i)=>(
<CoinCard  id={i.id} name={i.name} img={i.image}  price={i.current_price} url={i.url} key={i.id} symbol={i.symbol} currencySymbol={currencySymbol}/>))}
</div>
</>)}
<div className='btnContainer'>

{btns.map((item,index)=>(
<Button className='btn' colorScheme='blue'
onClick={()=>changePage(index+1)} 
>
{index+1}
</Button>))}



</div>





</div>







);
}









export default Coin;

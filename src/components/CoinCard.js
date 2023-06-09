import React from 'react'
import { Link } from 'react-router-dom';

const CoinCard=({id,name,img,symbol,price,currencySymbol="₹"})=>(
    <div className='excard'>
    <Link to={`/coin/${id}`}>
      <div className='card'>
      <img src={img}/>
      <h4>{symbol}</h4>
      <p>{name}</p> 
      <p>{price?`${currencySymbol}${price}`:"NA"}</p> 
      </div>
       </Link>
       </div>)

export default CoinCard;

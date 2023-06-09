import React from 'react'
import "./CoinDetails.css"
import { useState,useEffect } from 'react';
import Loading from './Loading';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '../index';
import { Badge, Box, Button, Center, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react';
import  Chart  from './Chart';
const CoinDetails = () => {const [Coin,SetCoin]=useState([]);

  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  const [currency,SetCurrency]=useState("inr");
  const[days,SetDays]=useState("24h")
  const[chartArray,setChartArrray]=useState([]);
  const currencySymbol=currency==="inr"?"₹":currency==="eur"?"€":"$";
  const params=useParams();
  const btns=["24h","7d","30d","60d","200d","max"];
  const switchChartStats=(val)=>{
switch (val) {
  case "24h":
    SetDays("24h")
    setLoading(true);
    break;
    case "7d":
      SetDays("7d")
      setLoading(true);
      break;
      case "30d":
        SetDays("30d")
        setLoading(true);
        break;
        case "60d":
        SetDays("60d")
        setLoading(true);
        break;
        case "200d":
          SetDays("200d")
          setLoading(true);
          break;
          case "max":
          SetDays("max")
          setLoading(true);
          break;

  default:
    SetDays("24h")
    setLoading(true);
    break;
}



  }
  useEffect(()=>{
    const fetchCoin=async()=>{
    try{
    const {data}= await axios.get(`${server}/coins/${params.id}`);
    // id name year country 
    const {data:chartData}=await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${
      currency}&days=${days}`);
    // kuch or nhi likh skte data ke alava??
    SetCoin(data);
setChartArrray(chartData.prices);
console.log(chartData);
// market caps prices total_volumes
console.log(data);
setLoading(false);}
    
    catch(error){
    SetCoin(true);
    setLoading(false); 
    
    
    }}
    fetchCoin();
    },[params.id,currency,days])
    



    if(error){
      return <coin message={"error while fetching coin"}/>
    }



  return (
    <div className='coinContainer'>
   {
loading?<Loading/>:(<>
<div className='Box'>
 
</div>
{/* chart */}
<Chart currency={currencySymbol} arr={chartArray} days={days}/>
<HStack p={"4"} wrap={"no-wrap"} width={"30"}>
 {
btns.map((i)=>(
<Button key={i} onClick={()=>switchChartStats(i)}>{i}</Button>
))




 } 



</HStack>
<RadioGroup value={currency} onChange={SetCurrency} p={"8"}>
<HStack spacing={"4"}>
<Radio value={"inr"}>INR</Radio>
<Radio value={"usd"}>USD</Radio>
<Radio value={"eur"}>EUR</Radio>
</HStack>
</RadioGroup>
<VStack spacing={"4"}  p="16" alignItems={"flex-start"}>
<Text fontSize={"small"} alignSelf="center" opacity={0.7}>
Last Updated on {Date(Coin.market_data.last_updated).split("G")[0]} 
</Text>
<Image src={Coin.image.large} w={"16"} h={"16"} 
objectFit={"contain"}/>
<Stat>
<StatLabel>
  {Coin.name}
</StatLabel>
<StatNumber>{currencySymbol}{Coin.market_data.current_price[currency]}</StatNumber>
<StatHelpText> 
<StatArrow type={Coin.market_data.price_change_percentage_24h>0?"increase":"decrease"}/>  
{Coin.market_data.price_change_percentage_24h}%
</StatHelpText>
</Stat>
<Badge fontSize={"2xl"} bgColor={"blackAlpha.800"} color={"white"}>
{`#${Coin.market_cap_rank}`}
</Badge>
<CustomBar high={`${currencySymbol}${Coin.market_data.high_24h[currency]}`} 
low={`${currencySymbol}${Coin.market_data.low_24h[currency]}`}
/>

<Box w={"full"} p="4">
<Item title={"Max Supply"} value={Coin.market_data.max_supply}/>
<Item title={"Circulating Supply"} value={Coin.market_data.circulating_supply}/>
<Item title={"Market Cap"} value={`${currencySymbol}${Coin.market_data.market_cap[currency]}`}/>
<Item title={"All Time High"} value={`${currencySymbol}${Coin.market_data.ath[currency]}`}/>
<Item title={"All Time Low"} value={`${currencySymbol}${Coin.market_data.atl[currency]}`}/>
</Box>

</VStack>
</>
)



   }
    </div>
  )
}
const CustomBar=({high,low})=>(
<VStack w={"full"}>
<Progress value={50} colorScheme={"teal"} w={"full"}/>
<HStack justifyContent={"space-between"} w={"full"} >
  <Badge children={low} colorScheme={"red"}/>
  <Text fontSize={'sm'}>24H Range</Text>
  <Badge children={high} colorScheme={"green"}/>
</HStack>
</VStack>)


const Item=({title,value})=>(
<HStack justifyContent={"space-between"} w={"full"}  
my={"4"}>
<Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>{title}</Text>
<Text>{value}</Text>



</HStack>






)










export default CoinDetails;

import React from 'react'
import "./home.css";
import img from "../images/bitcoin.png"
import {motion} from "framer-motion";
import { Box, Image, Text } from '@chakra-ui/react';
const Home = () => {
  return (
<Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
  <motion.div style={{
height:"80vh",}}
animate={{
translateY:"20px"}}
transition={{
duration:2,
repeat:Infinity,
repeatType:'reverse',




}}



>
<Image w={"full"} h={"full"} objectFit={"contain"} src={img}/>
</motion.div>



<Text 
fontSize={"6xl"}
textAlign={"center"}
fontWeight={"thin"}
color={"whiteAlpha.700"}
width={"300"}
>
CryptoCove
</Text>
</Box>

  )
}

export default Home

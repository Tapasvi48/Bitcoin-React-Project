import { Avatar, Box, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import avatarSrc from  "../images/1333507_Wallpaper2.jpg";

const Footer = () => {
  return (
    <Box
    bgColor={"blackAlpha.900"}
    color={"whiteAlpha.700"}
    minH={"48"}
    px={"16"}
    py={["16", "8"]}
  >
    <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
      <VStack w={"full"} alignItems={["center", "flex-start"]}>
        <Text fontWeight={"bold"}>About Us</Text>
        <Text
          fontSize={"sm"}
          letterSpacing={"widest"}
          textAlign={["center", "left"]}
        >
         Embrace the power of the blockchain revolution and let your crypto app be the gateway to financial freedom
        </Text>
      </VStack>

      <VStack>
        <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
        <Text>Our Founder</Text>
      </VStack>
    </Stack>
  </Box>
  )
}

export default Footer

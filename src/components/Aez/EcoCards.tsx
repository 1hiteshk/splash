// Card.js
import React from 'react';
import { Box, Button, Card, CardFooter, CardHeader, Flex, Stack, Text, VStack } from '@chakra-ui/react';

const EcoCards = ({ data, keys } : any) => {
    // console.log(data,"heyy");
    
  return (
    <Card
      bgImage={`url('/astroport.png')`}
      bgSize="cover"
      bgPosition="center"
      borderRadius="lg"
      color="white"
      boxShadow="lg"
      position="relative"
      width="287px"
      height="250px" // You can adjust the height as needed
    >
      <Flex direction="column" height="100%" justifyContent="space-between">
      
      <Flex gap="10px" p="10px" justifyContent="end">
          <Button height="20px" alignItems="center" _hover="none" borderRadius="4px"  color="#fff" fontSize="12px" fontWeight={400} 
          backgroundColor="#0f73ed"
          >
            {data[0].tags.data[0]}
          </Button>
          <Button height="20px" alignItems="center" _hover="none" borderRadius="4px" backgroundColor="#9a386c" color="#fff" fontSize="12px" fontWeight={400} >
          {data[0].tags.data[1]}
          </Button>
        </Flex>
      

        <CardFooter height="50px" width="100%" left="0" backgroundColor="#1e1a2599"  justifyContent="space-between" alignItems="center">
            <Text fontWeight={400} fontSize="16px" color="#fff" >{data[0].name.toUpperCase()}</Text>
            <Text fontWeight={400} fontSize="12px" color="#fff" >TVL - $ {data[0].tvl.toLocaleString()}</Text>
        </CardFooter>

        
        
      </Flex>
    </Card>
  );
};

export default EcoCards;

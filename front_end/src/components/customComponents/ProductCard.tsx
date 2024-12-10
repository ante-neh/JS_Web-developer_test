import React from "react";
import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

const ProductCard: React.FC<{
  image: string;
  name: string;
  description: string;
  price: string;
  handleBuyNow: () => void;
}> = ({ image, name, description, price, handleBuyNow }) => {
  const cardShadow = useBreakpointValue({
    base: "md",
    md: "lg",
  });

  return (
    <Box
      border="1px solid #e2e8f0"
      borderRadius="md"
      overflow="hidden"
      _hover={{
        boxShadow: cardShadow,
        transform: "scale(1.05)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      role="region"
      aria-labelledby="product-card"
      width="100%"
      maxWidth="300px"
    >
      <Image
        src={image}
        alt={name}
        borderRadius="md"
        mb={4}
        objectFit="cover"
        width="100%"
        height="200px"
      />

     <Box padding={2}>
          <Flex
            direction={["column", "row"]} 
            justify="space-between"
            align="baseline"
            mb={4}
          >
            <Text
              id="product-card"
              fontSize="xl"
              fontWeight="bold"
              mb={[2, 0]}
              aria-label="Product Name"
            >
              {name}
            </Text>

            <Text
              fontSize="lg"
              fontWeight="semibold"
              color="green.500"
              mb={[2, 0]} 
              aria-label="Product Price"
            >
              {price}
            </Text>
          </Flex>

          <Text
            fontSize="sm"
            color="gray.600"
            mb={4}
            aria-label="Product Description"
          >
            {description}
          </Text>

          <Button
            colorScheme="teal"
            size="sm"
            width="100%"
            onClick={handleBuyNow}
            aria-label="Buy Now"
            _focus={{ outline: "none" }}
          >
            Buy Now
          </Button>
     </Box>
    </Box>
  );
};

export default ProductCard;

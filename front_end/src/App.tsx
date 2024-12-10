import React from 'react';
import { Box } from '@chakra-ui/react';
import ProductCard from './components/customComponents/ProductCard';

const App: React.FC = () => {
    const handleBuyNow = () => {
        console.log('Buy Now button clicked!');
    };

    return (
        <Box
            bg="background"
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={4}
        >
            <ProductCard
                image="https://via.placeholder.com/150"
                name="Sample Product"
                description="This is a high-quality product designed to meet your needs.
                 Made from premium materials, it offers great durability and functionality. 
                 Whether you're looking for style, comfort, or performance,
                 this product delivers excellent value. Perfect for daily use or as a thoughtful gift, 
                 it is sure to impress with its sleek design and dependable features."
                price="$49.99"
                handleBuyNow={handleBuyNow}
            />
        </Box>
    );
};

export default App;

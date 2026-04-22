// Updated products.ts with Unsplash image arrays and fallback image support
const products = [
    {
        id: 1,
        name: 'Product 1',
        images: [
            'https://source.unsplash.com/random/800x600?product1',
            'https://source.unsplash.com/random/800x600?product1-2'
        ],
        fallbackImage: 'path/to/fallback/image1.jpg'
    },
    {
        id: 2,
        name: 'Product 2',
        images: [
            'https://source.unsplash.com/random/800x600?product2',
            'https://source.unsplash.com/random/800x600?product2-2'
        ],
        fallbackImage: 'path/to/fallback/image2.jpg'
    },
    // ... other products with similar structure
];

export default products;
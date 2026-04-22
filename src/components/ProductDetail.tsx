import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductDetail = ({ product }) => {
    const [imageError, setImageError] = useState({ main: false, thumbnails: {} });

    const handleImageError = (type, index) => {
        if (type === 'main') {
            setImageError(prev => ({ ...prev, main: true }));
        } else if (type === 'thumbnail') {
            setImageError(prev => ({ ...prev, thumbnails: { ...prev.thumbnails, [index]: true } }));
        }
    };

    return (
        <div className="product-detail">
            <img 
                src={imageError.main ? '/path/to/fallback-image.jpg' : product.mainImage} 
                alt={product.name} 
                onError={() => handleImageError('main')} 
            />
            <div className="thumbnails">
                {product.thumbnails.map((img, index) => (
                    <img 
                        key={index} 
                        src={imageError.thumbnails[index] ? '/path/to/fallback-image.jpg' : img} 
                        alt={product.name} 
                        onError={() => handleImageError('thumbnail', index)} 
                    />
                ))}
            </div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </div>
    );
};

ProductDetail.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        mainImage: PropTypes.string.isRequired,
        thumbnails: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default ProductDetail;
import React from 'react';
import ProductItem from '../ProductItem/index';

const ProductList = ({ products, remove, discount }) => {
    return (
        <div>
            <h1>Список товаров</h1>

            {products.map((prod) => (
                <ProductItem
                    prod={prod}
                    key={prod.id}
                    remove={remove}
                    discount={discount}
                />
            ))}
        </div>
    );
};

export default ProductList;

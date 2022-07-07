import React, { useState } from 'react';
import './styles/App.scss';

import ProductForm from './components/ProductForm/index';
import ProductList from './components/ProductList';
import ProductsTotal from './components/ProductsTotal/index';
import Discount from './components/Discount/idnex';

function App() {
    const [products, setProducts] = useState([
        { id: 1, name: 'prod', price: '10' },
        { id: 2, name: 'prod2', price: '15' },
        { id: 3, name: 'prod3', price: '20' },
    ]);
    const [disc, setDiscount] = useState({ num: 0 });

    const createProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const removeProduct = (prod) => {
        setProducts(products.filter((p) => p.id !== prod.id));
    };

    const getDiscount = (discount) => {
        setDiscount({ num: discount });
    };

    return (
        <div className="App">
            <ProductForm create={createProduct} />

            {products.length ? (
                <ProductList
                    products={products}
                    remove={removeProduct}
                    discount={disc.num}
                />
            ) : (
                <h1>Список пуст</h1>
            )}

            <ProductsTotal products={products} discount={disc.num} />

            <Discount discount={getDiscount} />
        </div>
    );
}

export default App;

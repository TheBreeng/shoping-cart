import React, { useState } from 'react';
import './style.scss';

const ProductForm = ({ create }) => {
    const [product, setProduct] = useState({ id: '', name: '', price: '' });

    const addNewProduct = (e) => {
        e.preventDefault();

        const newProduct = {
            ...product,
        };

        if (
            +product.id.trim() &&
            product.name.trim() &&
            +product.price.trim()
        ) {
            create(newProduct);
        }
        setProduct({ id: '', name: '', price: '' });
    };

    return (
        <form>
            <h1>Добавить товар</h1>

            <input
                value={product.id}
                onChange={(e) => setProduct({ ...product, id: e.target.value })}
                type="text"
                placeholder="Числовой идентификатор товара"
            />
            <input
                value={product.name}
                onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                }
                type="text"
                placeholder="Название товара"
            />
            <input
                value={product.price}
                onChange={(e) =>
                    setProduct({ ...product, price: e.target.value })
                }
                type="text"
                placeholder="Цена товара"
            />
            <input type="submit" value="Добавить" onClick={addNewProduct} />
        </form>
    );
};

export default ProductForm;

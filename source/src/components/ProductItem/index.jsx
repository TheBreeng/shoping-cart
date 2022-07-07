import React from 'react';
import CalcPrice from '../CalcPrice/index';
import './style.scss';

const ProductItem = (props) => {
    return (
        <div className="productItem">
            <div>ID: {props.prod.id}</div>

            <div>Название: {props.prod.name}</div>

            <CalcPrice
                text="Цена: "
                discount={props.discount}
                price={props.prod.price}
            />

            <button onClick={() => props.remove(props.prod)}>Удалить</button>
        </div>
    );
};

export default ProductItem;

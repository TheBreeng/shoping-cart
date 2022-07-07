import React from 'react';
import CalcPrice from '../CalcPrice/index';
import './style.scss';

const TotalProducts = (props) => {
    let totalPrice = 0;

    props.products.forEach((prod) => {
        totalPrice += +prod.price;
    });

    return (
        <div className="totalProducts">
            <span>
                Всего товаров: <strong>{props.products.length}</strong>
            </span>

            <CalcPrice
                text="На сумму: "
                discount={props.discount}
                price={totalPrice}
            />
        </div>
    );
};

export default TotalProducts;

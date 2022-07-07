import React, { useState } from 'react';
import './style.scss';

const Discount = ({ discount }) => {
    const [disc, setDiscount] = useState({ num: 0 });

    const addDiscount = () => {
        if (disc.num.trim() && +disc.num >= 0 && +disc.num < 100) {
            discount(disc.num);
        }
    };

    return (
        <div className="Discount">
            <div>
                <label>
                    Скидка:
                    <input
                        type="text"
                        placeholder="от 0 до 100"
                        onChange={(e) => setDiscount({ num: e.target.value })}
                    />
                    %
                </label>
            </div>
            <button onClick={addDiscount}>Установить скидку</button>
        </div>
    );
};

export default Discount;

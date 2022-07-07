import React from 'react';

const CalcPrice = (props) => {
    return (
        <div>
            {+props.discount ? (
                <span>
                    {props.text}
                    <strong>
                        {Math.round(
                            props.price - props.price * (props.discount / 100)
                        )}
                        $
                    </strong>{' '}
                    <span style={{ textDecoration: 'line-through' }}>
                        {props.price}$
                    </span>
                </span>
            ) : (
                <span>
                    {props.text} <strong>{props.price}$</strong>
                </span>
            )}
        </div>
    );
};

export default CalcPrice;

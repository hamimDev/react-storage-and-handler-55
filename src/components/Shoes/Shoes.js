import React from 'react';
import { add, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 12;
    const second = 6;
    const result = multiply(first,second);
    const sumTotal = add(first, second);
    return (
        <div>
            <h3>
                This is Shoes Compo
            </h3>
            <p>Result: {result}</p><br />
            <p>Sum Total: {sumTotal}</p>
        </div>
    );
};

export default Shoes;
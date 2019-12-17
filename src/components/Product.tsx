import React from 'react';

interface IProductProps {
    name: string;
    quantity: number;
    price: number;
}

export const Product: React.FC<IProductProps> = ({ name, quantity, price }) => {
    return (
        <tr>
            <th scope="row">1</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>
                <select className="form-control form-control-sm" style={{ width: '5rem' }}>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>RUB</option>
                </select>
            </td>
            <td>{price}</td>
        </tr>
    );
};

import React, { useContext } from 'react';
import { ProductContext } from '../../context/Context';
import Title from '../Title';

const OrderSummary = () => {
  const { cart, cartTotal } = useContext(ProductContext);
  return (
    <div className="order-summary">
      <Title title="zamówienie" />
      <table>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>x {product.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <span>
        Suma:{' '}
        {cartTotal.toLocaleString('pl-PL', {
          style: 'currency',
          currency: 'PLN',
        })}
      </span>
    </div>
  );
};

export default OrderSummary;

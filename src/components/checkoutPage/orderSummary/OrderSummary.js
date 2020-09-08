import React, { useContext } from 'react';
import { ProductContext } from '../../../context/context';
import Title from '../../Title';

const OrderSummary = () => {
  const { cart, cartTotal } = useContext(ProductContext);
  return (
    <div className="order-summary">
      <Title title="zamówienie" />
      <table className="order-summary__order">
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td className="order-summary__detail order-summary__detail--left">
                {product.title}
              </td>
              <td className="order-summary__detail order-summary__detail--mid">
                x {product.count}
              </td>
              <td className="order-summary__detail order-summary__detail--right">
                {(product.count * product.price).toLocaleString('pl-PL', {
                  style: 'currency',
                  currency: 'PLN',
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <span className="order-summary__total">
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

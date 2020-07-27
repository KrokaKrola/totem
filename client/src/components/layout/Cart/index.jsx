import React, { memo } from 'react';
import { ReactSVG } from 'react-svg';
import CartIcon from 'assets/svg/cart.svg';

const Cart = () => (
  <div>
    <ReactSVG src={CartIcon} />
    <span>99</span>
    <span>1 819 ₽</span>
  </div>
);

export default memo(Cart);

import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

import LogoPng from '../assets/img/logo.png';
import CartSvg from '../assets/img/cart.svg';
import HeartSvg from '../assets/img/heart.svg';
import UserSvg from '../assets/img/user.svg';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src={LogoPng} alt="Logo" />
          <div>
            <h3 className="text-uppercase">Charles & Keith Bags</h3>
            <p className="opacity-5">Магазин лучших сумок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src={CartSvg} alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src={HeartSvg} alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src={UserSvg} alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

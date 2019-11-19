import React from 'react';
import Menu from '../Menu/Menu';
import '../../css/ShopHeader/ShopHeader.css';

const ShopHeader = ({numItems, total}) => {
    return (
        <header className = 'shopHeader'>
            <a className = 'shopHeader__logo'>Book Shop</a>
            <Menu />
            <a className = 'shopHeader__numberBuy'><span>{numItems} items ${total}</span></a>
        </header>
    );
}

export default ShopHeader;

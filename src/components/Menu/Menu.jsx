import React from 'react';
import '../../css/Menu/Menu.css';

const Menu = () => {
    return (
        <ul className = 'menu'>
            <li className = 'menu__item'><a href= ''>books</a>
                <ul className ="submenu">
                    <li className = 'submenu__item'><a href= ''>Sudmenu 1</a></li>
                    <li className = 'submenu__item'><a href= ''>Sudmenu 1</a></li>
                    <li className = 'submenu__item'><a href= ''>Sudmenu 1</a></li>
                </ul>
            </li>
            <li className = 'menu__item'><a href= ''>art</a>
                <ul className ="submenu">
                    <li className = 'submenu__item'><a href= ''>Sudmenu 1</a></li>
                    <li className = 'submenu__item'><a href= ''>Sudmenu 1</a></li>
                    <li className = 'submenu__item'><a href= ''>Sudmenu 1</a></li>
                </ul>
            </li>
            <li className = 'menu__item'><a href= ''>apparel</a>
                <ul className ="submenu">
                    <li className = 'submenu__item'><a href= ''>Sudmenu 1</a></li>
                    <li className = 'submenu__item'><a href= ''>Sudmenu 1</a></li>
                    <li className = 'submenu__item'><a href= ''>Sudmenu 1</a></li>
                </ul>
            </li>
            <li className = 'menu__item'><a href= ''>furniture</a>
                <ul className = "submenu">
                    <li className = 'submenu__item'><a href= ''>Sudmenu 1</a></li>
                    <li className = 'submenu__item'><a href= ''>Sudmenu 1</a></li>
                    <li className = 'submenu__item'><a href= ''>Sudmenu 1</a></li>
                </ul>
            </li>
        </ul>
    );
}

export default Menu;

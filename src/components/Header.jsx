import 'react';
import './Header.css';
import HomeIcon from '../assets/home.svg';
import MenuIcon from '../assets/menu.svg';
import CartIcon from '../assets/cart.svg';

 function Header() {
   return (
     <header className="header">
         <div className="header-left">
           <h1 className="header-title">3D platinum</h1>
           <ul className="header-nav">
             <li><a href="#"><img src={HomeIcon} alt="Домик" /> Главная</a></li>
             <li><a href="#"><img src={MenuIcon} alt="Меню" /> Каталог</a></li>
             <li><a href="#"><img src={CartIcon} alt="Корзина" /> Корзина</a></li>
         </ul>
        </div>
     </header>
   );
 }

 export default Header;
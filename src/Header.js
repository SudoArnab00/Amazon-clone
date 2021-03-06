import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';

function Header() {
  const [{cart}] = useStateValue();
  return (
    <nav className='header'>
      <Link to='/login'>
        <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
      </Link>

       <div className='header__search'>
      <input type='text' className='header__searchInput' />
      <SearchIcon className='header__searchIcon'/>
      </div> 

       <div className='header__nav'>
        <Link className='header__link' to='/login'>
         <div className='header__option'>
          <span className='header__optionLineOne'> Hello Dip </span>
          <span className='header__optionLineTwo'> Sign in </span>
         </div>  
        </Link>

        <Link className='header__link' to='/login'>
         <div className='header__option'>
          <span className='header__optionLineOne'> Returns </span>
          <span className='header__optionLineTwo'> Orders </span>
         </div>  
        </Link>

        <Link className='header__link' to='/login'>
         <div className='header__option'>
          <span className='header__optionLineOne'> Your </span>
          <span className='header__optionLineTwo'> Prime </span>
         </div>  
        </Link>

        <Link className='header__link' to='/checkout'>
          <div className='header__optionBasket'>
           <ShoppingBasketIcon />
           <span className='header__optionLineTwo header__basketCount'> {cart?.length} </span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header;
import React, { useState } from 'react'
import { CartIcon, CartWrapper, HeaderWrapped, MenuLinksWrapped, MenuList } from './HeaderStyled'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { ContainerWrapped } from '../Utilities/container/ContainerStyled';
import { IoIosClose } from "react-icons/io";


const Header = () => {

  window.onresize = () => {
    
    let ancho = window.innerWidth;

    if(ancho > 991){
      setOpen(false)
    }

  }


  const [open, setOpen] =  useState(false);
  const [openCart, setOpenCart] = useState(false)
  
  const handdlerMenu = () => {
    if(openCart === true){
      setOpenCart(false)
    }

    setOpen(!open)
  }

  const handlerCart = () => {
    
    if(open === true){
      setOpen(false)
    }


    setOpenCart(!openCart)
  }




  return (
    <HeaderWrapped>
        <ContainerWrapped className='headerContainer'>
            <img src="https://katanasneaker.vercel.app/assets/img/KATANASNEAKERLOGO.png" alt="" />
        
            <MenuLinksWrapped> 
            {
              open === false ? <IoIosMenu  className='hamburger-icon' onClick={handdlerMenu}/> : <IoIosClose className='close-icon-menu' onClick={handdlerMenu} />
            }
                <MenuList $isopen={open}>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Tienda</a></li>
                    <li><a href="">Categorias</a></li>
                </MenuList>
                <CartIcon>
                  {
                    openCart === false ? <FaShoppingCart onClick={handlerCart}/> : <IoIosClose className='close-icon-cart' onClick={handlerCart} />
                  }
                  </CartIcon>
                
            </MenuLinksWrapped>

            <CartWrapper $isopen={openCart}> 

            </CartWrapper>
            
        </ContainerWrapped>
    </HeaderWrapped>
  )
}

export default Header
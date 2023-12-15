import React, { useState } from 'react'
import { HeaderWrapped, MenuLinksWrapped, MenuList } from './HeaderStyled'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { ContainerWrapped } from '../Utilities/container/ContainerStyled';



const Header = () => {

  const [open, setOpen] =  useState(false);
 
  const handdlerMenu = () => {
    setOpen(!open)
  }

  return (
    <HeaderWrapped>
        <ContainerWrapped className='headerContainer'>
            <img src="https://katanasneaker.vercel.app/assets/img/KATANASNEAKERLOGO.png" alt="" />
        
            <MenuLinksWrapped>
            <IoIosMenu  className='hamburger-icon' onClick={handdlerMenu}/>
             

                <MenuList $isopen={open}>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Tienda</a></li>
                    <li><a href="">Categorias</a></li>
            
                </MenuList>
                <a href="" className='cart-icon'><FaShoppingCart /></a>
            </MenuLinksWrapped>


        </ContainerWrapped>
    </HeaderWrapped>
  )
}

export default Header
import React from 'react'
import { FooterWrapper } from './FooterStyled'
import { ContainerWrapped } from '../Utilities/container/ContainerStyled'

const Footer = () => {
  return (
    <FooterWrapper>
        <ContainerWrapped className="footerContainer">
            
            <div className="list">
                <h4>Links de interes</h4>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Categorías</a></li>
                    <li><a href="">Tienda</a></li>
                </ul>
            </div>
            
            <div className='list'> 
            <h4>Contacto</h4>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Categorías</a></li>
                    <li><a href="">Tienda</a></li>
                </ul>
            </div>

            <div className='imageContainer'>
            <img  src="https://katanasneaker.vercel.app/assets/img/KATANASNEAKERLOGO.png"/>
            </div>

        </ContainerWrapped>
    </FooterWrapper>
  )
}

export default Footer
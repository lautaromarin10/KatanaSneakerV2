import React from 'react'
import { CategoriesWrapper } from './CategoriesStyled'
// import { Container } from '../Utilities/container/Container'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ContainerWrapped } from '../Utilities/container/ContainerStyled';

const Categories = () => {
  return (
    <CategoriesWrapper>
      <ContainerWrapped className='categoriesContainer'>
      <h2>Categorías</h2>

      <Swiper
      className='swiper'
      spaceBetween={20}
      breakpoints={
        {
          320: {
            slidesPerView: "1.5"
          },
          768: {
            slidesPerView: "2.5"
          },
          991: {
            slidesPerView: "3.5"
          },
          1200: {
            slidesPerView: "6"
          }
        }
      }

    >
      <SwiperSlide className='swiperSlide'>
        <a href="">
        <img src='https://www.kickscrew.com/cdn/shop/collections/banner_nike2_165c6f9f-79b8-47d2-8784-da095b246845.jpg?v=1633316029' />
        <span>Nike</span>
        </a>
      </SwiperSlide>

      <SwiperSlide className='swiperSlide'>
        <a href="">
        <img src='https://www.kickscrew.com/cdn/shop/collections/banner_adidas.jpg?v=1700756070' />
        <span>Adidas</span>
        </a>
      </SwiperSlide>

      <SwiperSlide className='swiperSlide'>
        <a href="">
        <img src='https://images.unsplash.com/photo-1681250530859-29e006547767?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <span>Off-white</span>
        </a>
      </SwiperSlide>

      <SwiperSlide className='swiperSlide'>
        <a href="">
        <img src='https://www.kickscrew.com/cdn/shop/collections/banner_aj.jpg?v=1700753693' />
        <span>Air Jordan</span>
        </a>
      </SwiperSlide>

      <SwiperSlide className='swiperSlide'>
        <a href="">
        <img src='https://www.kickscrew.com/cdn/shop/collections/banner_yeezy_8a4f5568-9edf-48ad-9f7a-8b66c8ed83cb_1200x.jpg?v=1633315715' />
        <span>yeezy</span>
        </a>
      </SwiperSlide>

      <SwiperSlide className='swiperSlide'>
        <a href="">
        <img src='https://media.a24.com/p/98b2accd6ef907688f9bdd2e7262b1d7/adjuntos/296/imagenes/009/041/0009041302/1200x675/smart/zapatillas-coscujpg.jpg' />
        <span>Ver todas las marcas</span>
        </a>
      </SwiperSlide>
     
      
    </Swiper>

      </ContainerWrapped>
    </CategoriesWrapper>
  )
}

export default Categories
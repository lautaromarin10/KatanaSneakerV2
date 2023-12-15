import React from 'react'
import { ProductsWrapper } from './ProductsListStyled'
// import { Container } from '../Utilities/container/Container'

import sneakerData from '../../../public/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductsCard from '../Utilities/ProductsCard/ProductsCard';
import { ContainerWrapped } from '../Utilities/container/ContainerStyled';

const ProductsList = () => {

    const trendingSneakers = sneakerData.filter( (sneakers) => sneakers.raiting > 7 ? true : false )

  return (
    <ProductsWrapper>
        <ContainerWrapped className='productContainer'>
            <h2>Los Sneakers mas valorados</h2>
          

          <Swiper
      className='swiper'
    breakpoints={{
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        576:{
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        }

    }} 
    >
            {
                trendingSneakers.map( (sneaker) => {
                    let {name,img,price,category,id} = sneaker
                    return (
                    <SwiperSlide className='productContainer' key={id}>
                        <ProductsCard img={img} name={name} price={price} category={category}/>
                    </SwiperSlide>
                    )
                })
            }

        </Swiper>
        </ContainerWrapped>
    </ProductsWrapper>
 
  )
}

export default ProductsList
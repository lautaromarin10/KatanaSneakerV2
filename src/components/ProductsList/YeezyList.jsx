import React from 'react'
import { ProductsWrapper } from './ProductsListStyled'
// import { Container } from '../Utilities/container/Container'
import sneakerData from '../../../public/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductsCard from '../Utilities/ProductsCard/ProductsCard';
import { ContainerWrapped } from '../Utilities/container/ContainerStyled';

const YeezyList = () => {

    const yeezySneaker = sneakerData.filter( (sneakers) => sneakers.category === "Yeezy"  ? true : false )

  return (
    <ProductsWrapper>
        <ContainerWrapped className='productContainer'>
            <h2>Tus Yeezy te esperan</h2>
          

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
                yeezySneaker.map( (sneaker) => {
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

export default YeezyList
import React from 'react'
import { StoreWrapped } from './StoreStyle'
import { ContainerWrapped } from '../Utilities/container/ContainerStyled'
import sneakerData from '../../../public/data'
import ProductsCard from '../Utilities/ProductsCard/ProductsCard'
import Categories from '../Categories/Categories'

const Store = () => {
  return (
    <StoreWrapped>
        <ContainerWrapped className='storeTop'>
            <h1>Tienda</h1>
            <Categories/>
        </ContainerWrapped>
    
        <ContainerWrapped className='StoreContainer'> 
                {
        sneakerData.map( (sneaker) => {
            let {name,img,price,category,id} = sneaker
                return (
                <ProductsCard key={id} img={img} name={name} price={price} category={category}/>
                )
            })
        } 
        </ContainerWrapped>
    </StoreWrapped>
  )
}

export default Store
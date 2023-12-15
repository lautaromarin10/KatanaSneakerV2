import React from 'react'
import { ProductWrapper } from './ProductsCardStyle'
import Button from '../Button/Button'

const ProductsCard = (props) => {
  return (
    <ProductWrapper>
        <div className='img-container'>
            <img src={props.img} alt="" />
        </div>
        <div className='text-container'>
        <small>{props.category}</small>
        <strong>{props.name}</strong>
        <div>
        <span>${props.price}</span>
        <Button $content="Agregar al Carrito"></Button>
        </div>
        </div>
           
    </ProductWrapper>
  )
}

export default ProductsCard
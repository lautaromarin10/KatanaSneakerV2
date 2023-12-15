import React from 'react'
import { HeroWrapper } from './HeroStyled'
import Button from '../Utilities/Button/Button'
import { ContainerWrapped } from '../Utilities/container/ContainerStyled'

const Hero = () => {
  return (
    <HeroWrapper>
    <ContainerWrapped className='herocontainer'>
        <h1>Katana Sneaker</h1>
        <p>En Katana Sneaker llevamos la misma precisión y habilidad de una katana samurái a la selección de sneakers premium para nuestros clientes, donde podras encontrar ese par especial que teacompañara en cada pisada</p>
        <Button $content="Conoce más" $big $primary $link="#" />
    </ContainerWrapped>
    </HeroWrapper>
  )


 


}

export default Hero
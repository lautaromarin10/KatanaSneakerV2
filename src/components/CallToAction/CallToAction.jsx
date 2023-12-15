import React from 'react'
import { CallToActionWrapper } from './CallToActionStyled'
import Button from '../Utilities/Button/Button'
import { ContainerWrapped } from '../Utilities/container/ContainerStyled'

const CallToAction = () => {
  return (
    <CallToActionWrapper>
        <ContainerWrapped className='CallToActionContainer'>
            <h2>Las Yeezy llegan a Katana Sneaker</h2>
            <p>Siluetas inconfundibles y Suelas Boost, Las Yeezy te harán sentir como si estuvieras caminando sobre las nubes, no te quedes sin tu par.</p>
            <Button $content="Ver todas las Yeezy" $big $primary $link="hola"></Button>
        </ContainerWrapped>
    </CallToActionWrapper>
  )
}

export default CallToAction
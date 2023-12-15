import React from 'react'
import { ContainerWrapped } from './ContainerStyled'


const Container = ({children}) => {
  return (
    <ContainerWrapped>
      {children}
    </ContainerWrapped>
  )
}

export default InnerDiv
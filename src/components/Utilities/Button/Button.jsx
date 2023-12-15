import React from 'react'
import { ButtonWrapper } from './ButtonStyled'

const Button = (props) => {
  return (
    <ButtonWrapper $primary={props.$primary} $big={props.$big}  $href={props.$link}>
        {props.$content}
    </ButtonWrapper>
  )
}

export default Button
import styled from "styled-components";

export const ButtonWrapper = styled.a`
        padding: ${props => props.$big ? "12px" :  "10px"};
        width: fit-content;
        border-radius: var(--rounded-out);
        border:0px;
        background-color: ${props => props.$primary ? "var(--white)" : "var(--black)"};
        color: ${props => props.$primary ? "var(--black)" : "var(--white)"};
        font-size: ${props => props.$big ? "16px" : "12px"};
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        cursor: pointer;
        transition-duration: 300ms;
        text-decoration: none;

        &:hover{
        filter: invert(1);
        }
`

import styled from "styled-components";

export const HeaderWrapped = styled.header`
width: 100%;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
background-color: rgba(0,0,0,0.9);
top: 0;
z-index: 999;

.headerContainer{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 30%;
        object-fit: contain;
        max-width: 100px;
    }
}

`

export const MenuLinksWrapped = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .hamburger-icon, .cart-icon{
        color: white;
        font-size: 2rem;
        transition-duration: 300ms;
        display: none;

        &:hover{
            opacity: 50%;
        }


        @media (max-width: 991px) {
            display: block;
        }

    }


    .cart-icon{
        font-size: 1.3rem;
        display: flex;
        margin-left: 10px;
    }
`

export const MenuList = styled.ul`
    display: flex;
    gap: 10px;
    list-style: none;

    li > a {
        color: white;
        text-decoration: none;
    }

    @media (max-width: 991px) {
        display: ${props => props.$isopen ? "flex" : "none"};
        flex-direction: column;
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 90px;
        width: 100%;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.9);
        padding: 20px 0px;
        border-bottom-left-radius: var(--rounded-out);
        border-bottom-right-radius: var(--rounded-out);
    }

   

`
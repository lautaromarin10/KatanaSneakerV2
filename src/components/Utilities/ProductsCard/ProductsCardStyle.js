import styled from "styled-components";

export const ProductWrapper = styled.div`
    width: 100%;
    height: 350px;
    background-color: var(--bg-card);
    border-radius: var(--rounded-out);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    gap: 15px;
    transition-duration: 300ms;
    margin-bottom: 5px;
   

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px;
                 -webkit-box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px;
    }
    

    .img-container{
    background-color: var(--white);
    height: 60%;
    width: 100%;
    border-radius: var(--rounded-inner);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition-duration: 300ms;
    

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition-duration: 300ms;
            
        }

    }

    .text-container{
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    
    small{
        font-weight: 900;
        opacity: .75;
        padding: 4px 10px;
        background-color: var(--white);
        border-radius: var(--rounded-inner);
    }

    div{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        align-items: center;
    }
    }

`
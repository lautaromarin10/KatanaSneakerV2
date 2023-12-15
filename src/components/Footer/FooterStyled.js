import styled from "styled-components";

export const FooterWrapper = styled.footer`
width: 100%;
height: 250px;
display: flex;
justify-content: center;
align-content: center;
margin-top: 5rem;
background-color: var(--black);
overflow: hidden;
padding-top: 10px;
padding-bottom: 10px;

    .footerContainer{
        width: 100%;
        display: flex;

    }

    .list{
        width: 40%;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;

        h4{
            margin-bottom: 10px;
        }

        ul{
            color: white;
            list-style: none;
        }

        ul > li > a{
            color: white;
            text-decoration: none;
            transition-duration: 300ms;
        }

        ul > li > a:hover {
            opacity: 50%;
        }

    }

    .imageContainer{
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            max-width: 150px;
        }
    }

    @media (max-width: 576px) {

        height: 350px;
        justify-content: center;
        align-items: center;
        
        .footerContainer{
            flex-direction: column;
            height: 100%;
            justify-content: space-evenly;

            .list{
                width: 100%;
            }



        }


        .imageContainer{
            display: none
        }

        


    }

`
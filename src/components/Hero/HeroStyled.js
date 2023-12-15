import styled from "styled-components"

export const HeroWrapper = styled.section`
width: 100%;
height: 100vh;

background-image: linear-gradient(0deg, rgba(0,0,0,0.40) 10%, rgba(255,255,255,0) 100%), url(https://katanasneaker.vercel.app/assets/img/shoesbanner.jpg);
background-attachment: fixed;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
color: var(--white);
display: flex;
justify-content: center;
align-items: center;
transition-duration: 300ms;

animation-duration: 15s;
animation-name: bg-animate;
animation-timing-function: linear;
animation-iteration-count: infinite;


.herocontainer{
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    gap: 10px;

  

    h1{
        letter-spacing: 3px;
    }

    p{
        width: 100%;
        font-size: 20px;


        @media (min-width: 768px) {
            width: 50%;
        }
    }
}

@keyframes bg-animate {

    0% {
        background-position: top;
    }   

    50%{
        background-position: bottom;
    }

    100%{
        background-position: top;
    }


}
   

`
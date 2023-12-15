import styled from "styled-components";

export const CallToActionWrapper = styled.section`
width: 100%;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
background-image:  linear-gradient(0deg, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.20) 60%),url(https://getwallpapers.com/wallpaper/full/2/8/3/1382860-yeezy-wallpapers-3840x2160-for-iphone-5s.jpg);
background-size: cover;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-color: #000f22;
color: white;

    .CallToActionContainer{
        width: 100%;
        height: 85%;
        display: flex;
        justify-content: end;
        align-items: left;
        flex-direction: column;
        gap: 10px;

        @media (min-width:991px) {
            p{
                max-width: 40%;
            }

            h2{
                font-size: 2.5rem;
            }
        }

       
    }
`

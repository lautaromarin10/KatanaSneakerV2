import styled from "styled-components";

export const CategoriesWrapper = styled.section`
    width: 100%;
    height: fit-content;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .categoriesContainer{
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: left;
        align-items: start;
        flex-direction: column;
        gap: 2rem;

        h2{
            height: 10%;
        }


        .swiper{
            width: 100%;
            height: 90%;
        }

        .swiperSlide{
            width: 100%;
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: var(--rounded-out);
            transition-duration: 300ms;
            overflow: hidden;


            &:hover{
                box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px;
                 -webkit-box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px;
            }

        }

        a{
            width: 100%;
            height: 100%;
            border-radius: var(--rounded-out);

            img{
                width: 100%;
                height: 100%;
                border-radius: var(--rounded-out);
                object-fit: cover;
                position: relative;
                z-index: 1;
                transition-duration: 300ms;
            }
            
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                padding: 20px;
                z-index: 4;
                color: black;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: left;
                align-items: end;
                font-size: 18px;
                color: var(--white);
                transition-duration: 300ms;
                line-height: 1;
                border-radius: var(--rounded-out);
                background: linear-gradient(0deg, rgba(0,0,0,0.70) 10%, rgba(255,255,255,0) 100%);
            }

            &:hover > span{
            background-color: rgba(0, 0, 0, 0.3)
            }

            &:hover > img{
                height: 110%;
                width: 1;
            }

        }
        }

       


    

`
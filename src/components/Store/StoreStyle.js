import styled from "styled-components";

export const StoreWrapped = styled.section`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 140px;
flex-direction: column;
gap: 2rem;


.storeTop{
    display: flex;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    section{
        align-items: start;

        .swiperSlide{
            height: 90px;
        }
    }

}



.StoreContainer{
    width: 100%;
    height: 100%;
    display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 20px;
grid-row-gap: 20px;


@media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
}

}
`


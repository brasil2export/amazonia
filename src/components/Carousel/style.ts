import styled from 'styled-components'


export const Container = styled.header`

.containerCarrosel{
    margin-top: 40px;
    max-width: 600px;
    width: 100%;

    img{
        width: 100%;
        height: 100%auto;
        object-fit: cover;
    }

    .containerCaption{

       width: 100%;
        left: 0;
        z-index: 1;
        bottom:0px;
        background: rgba(0, 0, 0, 0.5);

       @media(max-width: 700px){
        width: 100%;
        left: 0;
        z-index: 1;
        bottom:0px;
        background-color: #000000;

        h3{
            font-size: 32px;
        }
        }
       }
    }


`

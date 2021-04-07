import styled, {keyframes} from 'styled-components'


const rotate = keyframes`
  0%   {transform: translateY(0px);}
  25%  {transform: translateY(25px);}
  50%  {transform: translateY(25px);}
  100% {transform: translateY(0px);}
`;

export const Container = styled.div`
.acordionContainer{



    .acordion{
        display: flex;
    flex-direction: column;
    }

    .card {
        border: 0;
    }
    .card-body{
        padding: 2.25rem;
    }

    .card-header{
        padding-bottom: 0;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border:none;
    }


    h2{
        text-transform: uppercase;
        font-size: 40px;
        padding: 20px;
        text-align: center;

    }

    button {
        width: 50%;
        height: 100%;
        padding: 12px 16px;
        outline: none;
       
        color: #fff;
        border: none;
        text-align: left;
        display: flex;
        justify-content: space-between;

        @media (max-width: 900px){
            width: 100%;
        }
    }

    @media (max-width: 900px){
        padding: 0;
        text-align: justify;
    }

    p {
        text-align: justify;
    }

}

`

export const Banner = styled.div`
width: 100%;
height: calc(80vh - 100px);
position: relative;
display: flex;
align-items: center;
justify-content: center;

    h1{
    z-index: 2;
    color: white;
    font-size: 64px;

    @media (max-width: 900px){
        font-size: 42px;
        text-align: center;
        }
    @media (max-width: 600px){
        font-size: 32px;
        }
    }

    img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.3);
    }

`


export const Content = styled.main`
min-height: 100vh;
width: 100%;
background-color: #fefefe;
display: grid;
grid-template-columns: 1fr minmax(600px, 700px);


margin: 0 auto;

@media (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 700px){
    grid-template-columns: 1fr;
    }


.imagemWrapper{

    
    padding: 4%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;

    @media (max-width: 700px){
        grid-row-start: 1;
        justify-content: center;
        align-items: center;
    }

    img{
        animation: ${rotate} 3s ease-in-out infinite;
        position: sticky;
        top: 110px;
        max-width: 600px;
        object-fit: contain;
        @media (max-width: 1000px){
            max-width: 400px;
        }

        @media (max-width: 900px){
            max-width: 100%;
        }


    }
}

.contentWrapper{
    padding: 4%;


    .dicription{
        min-height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;

        h2{
            line-height: 59px;
            max-width: 700px;
            font-size: 42px;

            @media (max-width: 1000px){
                line-height: 52px;
                max-width: 700px;
                font-size: 35px;
                text-align: center;
            }

            
        }
    }
}


   


`


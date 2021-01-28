import styled from 'styled-components'


export const Conteiner = styled.main`

    min-height: calc(100vh - 100px);

    .wrapperContent{
        max-width: 1400px;
        margin: 0 auto;
        position: relative;
        min-height:calc( ${props => props.theme.widthContantAbout.height} + 50px);

        @media (max-width: 1000px){
            min-height:calc( ${props => props.theme.widthContantAbout.heightTab} + 50px);
            }

            @media (max-width: 800px){

                min-height: fit-content;
            }

        .content{
            width: 800px;
            position: absolute;
            top: -50px;
            left: 50%;
            height: fit-content;
            z-index : 2;
            transform: translateX(-50%);
            padding: 32px;
            background-color: white;
            border: 1px solid black;


  
            
            @media (max-width: 1000px){
                max-width: 600px;
                width: 100%;
                height: ${props => props.theme.widthContantAbout.heightTab};
            }

            @media (max-width: 900px){
              position: initial;
              margin: 0  auto;
            height: fit-content;
            z-index : 2;
            transform: translateX(0);
            padding: 32px;
            background-color: white;
            border: none;

            p{
                text-align: justify;
            }

            }

            h1{
                margin-bottom: 40px;
            }
        }
    }

    .grid{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        max-width: 1400px;
        margin: 0 auto;
        justify-content: center;
        .item{
            position: relative;
            flex: 400px;
            height: 300px;
            max-width: 700px;
            flex-grow: 3;
            margin: 16px;

            @media (max-width: 800px){

                max-width: 600px;
            }
        }

    }

`

export const Banner = styled.div`
   position: relative;
   width: 100%;
   height: 600px;
   img{
    @media (max-width: 1000px){

        object-fit: cover;
    }
   }

`
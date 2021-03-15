import styled from 'styled-components'


export const Container = styled.div`
.acordionContainer{

max-width: 1400px;
margin: 0 auto;
padding:  0px 60px 60px;



    button {
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: black;
    outline: none;
    border: none;
    text-align: left;
    display: flex;
    justify-content: space-between;
    }

    @media (max-width: 900px){
        padding: 0;
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
min-height: 80vh;
width: 100%;
background-color: #fefefe;
display: flex;
justify-content: center;
align-items: center;
padding: 4% 4% 0;
max-width: 1400px;
margin: 0 auto;

@media (max-width: 900px){
        flex-direction: column;  
    }


.imagemWrapper{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        max-width: 600px;

        @media (max-width: 1200px){
            max-width: 500px;
        }

        @media (max-width: 900px){
            max-width: 500px;
            width: 100%;
            object-fit: cover;
        }
    }
}

.contentWrapper{
    flex: 1;

    @media (max-width: 900px){
        
        padding: 24px;
        h1{
            text-align: center
        };
        p{
            text-align: justify;
        }
    }
}

`
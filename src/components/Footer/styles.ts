import styled from 'styled-components'


export const Container = styled.footer`
    background-color: #000000;
    color: #ffffff;
    min-height: 400px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 24px;
    align-items: center;

 

`

export const ContentFooter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1500px;
    flex-wrap: wrap;
   

   .logoFooter{
       @media(max-width: 900px){
           width: 100%;
           display: flex;
           justify-content: center;
       }
   }

    .menuFooter{
    padding: 16px;
    height: 100%;

    .conteinerMenu{

        display: flex;
        flex-direction: column;
        flex: 1;
        margin-bottom: 40px;

        a{
        margin-bottom: 12px;
        transition: .2s;
            &:hover{
            color: ${props => props.theme.colors.primary};
            }
        }
    }

    .email{
        a{
        color: ${props => props.theme.colors.primary};
        }
    }

    }

    .adressFooter{
    padding: 16px;
    display: flex;
    flex-direction: column;


    .adress{
        margin-bottom: 32px;

        h5{
        color: ${props => props.theme.colors.primary};
        font-size: 18px;
        margin-bottom: 8px;
        }
    }

    .socialMedia{
        display: flex;



        a{
        margin-right: 24px;
        transition: 400ms;

        path{
            transition: 400ms;
        }
        &:hover path{
        
            fill:  ${props => props.theme.colors.primary} !important;
        }
        
        }
    }
    }

`

export  const CopyRightFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 1000px){
   margin-top: 20px; 
  }


`

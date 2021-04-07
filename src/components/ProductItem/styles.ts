import styled from 'styled-components'


export const ContainerGrid = styled.div`

    display: flex;
    flex-direction: column;
    background-color: white;
    min-height: 380px;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    box-shadow: 4px 1px 9px black;
    justify-content: space-between;

    &:hover{
      cursor: pointer;


      .itemImage{
        img{
          transform: scale(1.1);
          
        }
      }
      .itemContent{
        p{
          opacity: 1;
        }
      }
    }
   
    .itemImage{
      width: 100%;
      height: 100%;
      max-height: 300px;
      overflow: hidden;

      img{
        width: 100%;
        height: 100%;
        max-height: 300px;
        object-fit: contain;
        border-radius: 8px 8px 0px 0px;
        transition: 400ms;

      }
    }

    .itemContent{
      cursor: pointer;
      color: white;
      padding: 16px;
      background-color: black;
      position: relative;
      display: flex;
      justify-content: space-between;
      border-radius: 0px 0px 8px 8px;
     
     .text{
      width: 80%;
     }

      h4{
        color: ${props=> props.theme.colors.primary};
        font-size: 20px;
        font-weight: bold;
      }

      p{
        margin-bottom: 0;
        font-size: 16px;
        line-height: 19px;
        opacity: 0.5;
        transition: opacity 400ms ease-out;
      }
    }

    .itemButton{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px;
      width: 20%;
      button{
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: #ffffff;
      font-weight: bold;
      transition: 400ms;
      outline: none;
      font-size: 24px;

      svg{
        height: 42px;
        width: 42px;
        fill: white;
        transition: 400ms;
      }

            &:hover{
              opacity: 0.5;
              fill: red;
            }
        }

    }

`
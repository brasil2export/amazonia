import styled from 'styled-components'



export const Container = styled.header`
     height: 100%;
     width: 100%;

     .map-popup{
          left: -116px;
     }
     .leaflet-popup-tip-container{
          display: none;
     }

     .leaflet-popup-content-wrapper{
          
    transform: translateX(199px);

    .leaflet-popup-content{
         max-width: 200px;
    }

     }
`

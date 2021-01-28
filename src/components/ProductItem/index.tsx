
import { ContainerGrid } from './styles'
// import Image from 'next/image'
import MaisIcon from '../../assets/mais.svg'

interface productItemProps{

  title: string;
  contentText: string;
  image: string;
}

const ProductItem: React.FC<productItemProps>  = ( {contentText, image, title } ) =>{
  let text
  if(contentText.length <= 40){
    text = contentText;
  }else{
     text  = contentText.substring(0,40) + "...";
  }
return (

    <ContainerGrid onClick={()=>{return console.log("click")}}>
      <div className="itemImage">
        {/* <Image src={image} width={500} height={500} quality={100}/> */}
        <img src={image} alt=""/>
      </div>              

      <div className="itemContent">
        <div className="text">
        <h2>{title}</h2>
        <p> {text}</p>
        </div>
       

        <div className="itemButton">
        <button>
          <MaisIcon/>
        </button>
      </div>
      </div>

      
    </ContainerGrid>

)
}

export default ProductItem


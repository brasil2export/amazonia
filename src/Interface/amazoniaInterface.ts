export interface amazoniaInterface {
    Amazonia_Therapy_Vitaoils: AmazoniaBaseProps;
    Amazonia_Therapy_BI_BTX: AmazoniaBaseProps;
    Amazonia_Therapy_Vitaoils_Shampoo: AmazoniaBaseProps;
    Conditioner_Vitaoils: AmazoniaBaseProps;
    Amazonia_Therapy_Vitaoils_Serum_Perfect_Smooth: AmazoniaBaseProps;
    products_Information_Home?: (ProductsInformationHomeEntity)[] | null;
  }
  export interface AmazoniaBaseProps {
    title: string;
    description: string;
    productsInformation?: (ProductsInformationEntity)[] | null;
  }
  export interface ProductsInformationEntity {
    id: number;
    title: string;
    content?: string | null;
    size?: string | null;
    IngredientDetails?: (IngredientDetailsEntity)[] | null;
  }
  export interface IngredientDetailsEntity {
    title: string;
    description: string;
  }
  export interface ProductsInformationHomeEntity {
    idProduct: number;
    title: string;
    text: string;
    alt: string;
  }
  
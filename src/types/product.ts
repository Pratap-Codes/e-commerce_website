interface Dimensions{
    width:number;
    height:number;
    depth:number;
}

interface Review{
    rating:number;
    comment:string;
    date:string;
    reviewName:string;
    reviewEmail:string;
}
interface Meta{
    createdAt:string;
    updatedAt:string;
    barcode:string;
    qrCode:string;
}
export interface Products{
    id:number;
    title:string;
    description:string;
    category:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    tags:string[];
    brand:string;
    weight:number;
    dimensions:Dimensions;
    warrantyInformation:string;
    shippingInformation:string;
    availabilityStatus:string;
    reviews:Review;
    meta:Meta;
    images:string[];
    thumbnail:string;
}
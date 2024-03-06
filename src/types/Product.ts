export type Product = {
    id: number
    image: string ;
    name: string ;
    discountPrice: number;
    originalPrice: number;
    description: string;
    categoryId: number
}

export type ProductSimple = {
    name: string,
    image: string
}

export type ProductDiscount = {
    image: string,
    name: string,
    disocunt: number
}
import { callGetEndpoint, callPostEndpoint } from "./Config"

const prefix = '/product';

export const retrievePopularProducts = async (storeId: number, alreadyRetrieved: number)=>{
    const endpoint = '/all/mostPurchased/category'
    const response = await callGetEndpoint(prefix, endpoint, [storeId], `?rm=${alreadyRetrieved}`);
    return response
}

export const retrieveEndingPromotionItems = async (storeId: number)=>{
    const endpoint = '/all/discount/ending';
    const response = await callGetEndpoint(prefix, endpoint, [storeId]);
    return response
}

export const retrieveProduct = async (productId: number)=>{
    const endpoint = '/';
    const response = await callGetEndpoint(prefix, endpoint, [productId])
    return response
}

export const retrieveRelatedProduct = async (categoryId: number, alreadyRetrieved: number)=>{
    const endpoint = '/all/category';
    const response = await callGetEndpoint(prefix, endpoint, [categoryId], `?rm=${alreadyRetrieved}`);
    return response
}
import { callGetEndpoint, callPostEndpoint } from "./Config"

const prefix = '/category';

export const retrieveParentCategoriesFromStore = async (storeId: number)=>{
    const endpoint = ''
    const response = await callGetEndpoint(prefix, endpoint, [storeId]);
    return response
}

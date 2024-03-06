import { callGetEndpoint, callPostEndpoint } from "./Config"

const prefix = '/store';

export const retrieveStoreData = async (storeId: number)=>{
    const endpoint = ''
    const response = await callGetEndpoint(prefix, endpoint, [storeId]);
    return response
}
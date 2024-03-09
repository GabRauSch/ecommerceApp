import { callGetEndpoint, callPostEndpoint } from "./Config"

const prefix = '/admin';

export const findProductAnalyticInfo = async (storeId: number)=>{
    const endpoint = '/products/analyticInfo';
    const response = await callGetEndpoint(prefix, endpoint, [storeId])
    return response
}

export const findClientsAnalyticInfo = async (storeId: number)=>{
    const endpoint = '/clients/analyticInfo';
    const response = await callGetEndpoint(prefix, endpoint, [storeId])
    return response
}

export const findOverViewInfo = async (storeId: number, date?: string)=>{
    const endpoint = '/overview';
    const response = await callGetEndpoint(prefix, endpoint, [storeId], `?startDate=${date}`);
    return response;
}
export const findSales = async (storeId: number)=>{
    const endpoint = '/sales';
    const response = await callGetEndpoint(prefix, endpoint, [storeId]);
    return response
}
export const findSalesOverView = async (storeId: number)=>{
    const endpoint = '/sales/overview';
    const response = await callGetEndpoint(prefix, endpoint, [storeId]);
    return response
}

export const findClientsOverView = async (storeId: number)=>{
    const endpoint = '/clients/overView';
    const response = await callGetEndpoint(prefix, endpoint, [storeId]);
    return response
}

export const findClients = async (storeId: number)=>{
    const endpoint = '/clients';
    const response = await callGetEndpoint(prefix, endpoint, [storeId]);
    return response
}

export const findAllProductInfo = async (storeId: number)=>{
    const endpoint = '/products/allInfo';
    const response = await callGetEndpoint(prefix, endpoint, [storeId]);
    return response
}
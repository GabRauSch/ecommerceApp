import { callPostEndpoint } from "./Config";

const prefix = '/auth'

export const register = async (email: string, password: string, customName: string)=>{
    const body = {
        email,
        password,
        customName
    }
    const response = await callPostEndpoint(prefix, '/register', body);
    return response
}
export const registerConfirmation = async (customName: string, userToken: string)=>{
    const body = {
        customName,
        userToken
    }
    const response = await callPostEndpoint(prefix, '/registerConfirmation', body);
    return response
}
export const login = async (email: string, password: string)=>{
    const body = {
        email,
        password
    }
    const response = await callPostEndpoint(prefix, '/login', body)
    return response
}
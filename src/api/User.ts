import { callGetEndpoint } from "./Config";

const prefix = '/user'

export const retrieveUserData = async (userId: number)=>{
    const endpoint = ''
    const response = await callGetEndpoint(prefix, endpoint, [userId]);
    return response
}
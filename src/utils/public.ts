import { backendIP, backendPort } from "../api/Config"

export const getPublicImage = (image: string)=>{
    return `http://localhost:${backendPort}/images/${image}`
}

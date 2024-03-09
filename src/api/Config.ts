import axios from "axios";

export const backendIP = '127.0.0.1';
export const backendPort = 3001 

export const getTokenFromState = async () => {
    return true
    // try {
        // const token = await AsyncStorage.getItem('userToken');
    //     if(token){
    //         return token
    //     }
    //     return ''
    // } catch (error) {
    //     console.error(error)
    //     return ''
    // }
}


export const callPostFormData = async (url: string, body: { image: string; userId: string }) => {
    try {
        const finalUrl = `http://${backendIP}:${backendPort}${url}`;
        const token = await getTokenFromState();
        
        const imageUri = body.image;
        const fileName = body.image.split('/').pop()!;
        const extension = fileName.split('.')[1];

        const formData = new FormData();
        formData.append('file', JSON.parse(JSON.stringify({
            name: fileName,
            uri: imageUri,
            type: `image/${extension}`
        }))); 
        formData.append('userId', body.userId);

        const response = await axios.post(finalUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });

        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const callPostEndpoint = async (prefix: string, url: string, body: object, queries?: string)=>{
    try {
        const finalUrl = `http://${backendIP}:${backendPort}${prefix}${url}`
        const token = await getTokenFromState();
        const response = await axios.post(finalUrl, body, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.data) {
                return error.response;
            }
        }
        throw error;
    }
}

export const callGetEndpoint = async (prefix: string, url: string, params: string[] | number[], queries?: string)=>{
    try {
        const paramsString = params.join('/');
        queries = (queries == undefined) ? '' : queries 
        const finalUrl = `http://${backendIP}:${backendPort}${prefix}${url}/${paramsString}${queries}`
        console.log(finalUrl)
        const token = await getTokenFromState();
        const response = await axios.get(finalUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.data) {
                return error.response;
            }
        }
        throw error;
    }
}

export const callPutEndpoint = async (url: string, body: object, queries?: string)=>{
    try {
        const finalUrl = `http://${backendIP}:${backendPort}${url}`
        const token = await getTokenFromState() 
        const response = await axios.put(finalUrl, body, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.data) {
                return error.response;
            }
        }
        throw error;
    }
}

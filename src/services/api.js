import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4000/pictures'
})

export const FetchData = async () => {
    const response = await api.get("/")
    return response.data;
}

export function getimageUrl(imagem) {
    return (
        'http://localhost:4000/' + imagem.src 
    )
}

export default api
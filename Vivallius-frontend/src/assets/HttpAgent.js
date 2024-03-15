import axios from 'axios'
const baseUri = 'http://localhost:4980/api/' // NEEDS TO BE FULL URL.

export async function HttpRequest(endpoint, requestOptions){
    try{
        let response = await fetch(baseUri + endpoint, requestOptions)
        return response
    } catch (event) {
        return event
    }
}

export async function FormRequest(endpoint, requestBody, headers){
    try{
        const { data } = await axios.post(baseUri + endpoint, requestBody, headers)
        return data
    } catch (event) {
        return event
    }
}
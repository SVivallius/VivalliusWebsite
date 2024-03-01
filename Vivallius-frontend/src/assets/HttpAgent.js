import axios from 'axios'
const baseUri = 'http://localhost:4980/api/1/'

export async function HttpRequest(endpoint, requestOptions){
    try{
        let response = await fetch(baseUri + endpoint, requestOptions)
        return response
    } catch (event) {
        console.log(event)
        return new Array
    }
}

export async function FormRequest(endpoint, requestBody, headers){
    try{
        const { data } = await axios.post(baseUri + endpoint, requestBody, headers)
        return data
    } catch (event) {
        console.log(event)
        return new Array
    }
}
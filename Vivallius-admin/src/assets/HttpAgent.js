import axios from 'axios'
const baseUri = 'http://localhost:4980/api/'

export async function HttpRequest(endpoint, requestOptions){
    try{
        let promise = await fetch(baseUri + endpoint, requestOptions)
        return promise
    } catch (event) {
        console.log(event)
        return event
    }
}

export async function FormRequest(endpoint, requestBody, headers){
    try{
        const { data } = await axios.post(endpoint, requestBody, headers)
        return data
    } catch (event) {
        return event
    }
}
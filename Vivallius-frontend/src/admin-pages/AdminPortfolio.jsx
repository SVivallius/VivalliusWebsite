import './styles/AdminPortfolio.css'
import { HttpRequest } from '../assets/HttpAgent.js'
import { useContext, useEffect, useState } from 'react'
import AdminContext from '../assets/AdminContext.jsx'

function AdminPortfolio() {
    const {adminArgs} = useContext(AdminContext)
    const [imgArray, setImgArray] = useState([])
    const [formData, setFormData] = useState({
        
    })

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let getImgs = () =>{
            let args = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }
            HttpRequest('1/public/photo', args)
                .then((response) => {
                    if (response.ok){
                        return response.json()
                    }
                    else throw new Error
                })
                .then((json) => {
                    let t = []
                    json.map((item) => {
                        t.push(item)
                    })
                    setImgArray(t)
                    setIsLoading(false)
                })
                .catch((error) => {
                    setImgArray([])
                    setIsLoading(false)
                })
        }
        getImgs()
    }, [])

    const handleFormInputChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (args) => {
        args.preventDefault()
        let rqstArgs = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Vivallius-Admin-Token': adminArgs.context.token
            },
            body: JSON.stringify(formData)
        }
        HttpRequest('1/admin/photo', rqstArgs)
            .then((response) => {
                if (response.ok){
                    alert("Den nya bilden har lagts upp!")
                } else throw new Error("Bilden gick inte att ladda upp.")
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    return (
        <>
            <div className={`admin-folio-add-img`}>

            </div>
        </>
    )
}

export default AdminPortfolio
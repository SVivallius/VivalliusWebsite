import './styles/AdminPortfolio.css'
import { HttpRequest, FormRequest } from '../assets/HttpAgent.js'
import { useContext, useEffect, useState } from 'react'
import AdminContext from '../assets/AdminContext.jsx'
import RingLoader from '../components/RingLoader/RingLoader.jsx'
import ImageEntry from './components/ImageEntry/ImageEntry'

function AdminPortfolio() {
    let defaultFormData = {
        Title: '',
        Description: '',
        PhotoTaken: '',
        Image: null,
        ModelPersonIds: []
    }

    const {adminArgs} = useContext(AdminContext)
    const [imgArray, setImgArray] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)
    const [formData, setFormData] = useState(defaultFormData)

    const [isLoading, setIsLoading] = useState(true)

    const getImgs = () =>{
        let args = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }
        HttpRequest('1/public/photos', args)
            .then((response) => {
                if (response.ok){
                    console.log('Response was OK!')
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

    useEffect(() => {
        getImgs()
        console.log(imgArray)
    }, [])

    const handleFormInputChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0]
        const {name} = event.target
        setFormData({
            ...formData,
            [name]: file
        })
        if (file){
            const reader = new FileReader()
            reader.onloadend = () => {
                setSelectedImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = (args) => {
        args.preventDefault()
        let form = new FormData()

        form.append('Title', formData.Title)
        form.append('Description', formData.Description)
        form.append('PhotoTaken', formData.PhotoTaken)
        form.append('Image', formData.Image)
        if (formData.ModelPersonIds > 0){
            form.append('ModelPersonIds', JSON.stringify(formData.ModelPersonIds))
        }

        let rqstArgs = {
            method: 'POST',
            headers: {
                'X-Vivallius-Admin-Token': adminArgs.context.token
            },
            body: form
        }
        HttpRequest('1/admin/photos', rqstArgs)
            .then((response) => {
                if (response.ok){
                    alert("Den nya bilden har lagts upp!")
                    setFormData(defaultFormData)
                    getImgs()
                } else throw new Error("Bilden gick inte att ladda upp.")
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    return (
        <>
            <div className={`admin-folio-add-img`}>
                <h2>Lägg till nya bilder:</h2>
                <form className={`admin-folio-form`} onSubmit={handleSubmit}>
                    <label htmlFor='file-upload' className={`folio-file-input`}>
                        <p>VÄLJ BILD</p>
                        <div className='backdrop'></div>
                        {selectedImage == null ? (
                            <></>
                        ) : (
                            <img src={selectedImage}/>
                        )}
                    </label>
                    <input id='file-upload' type='file' accept='image/*' name='Image'onChange={handleImageChange}/>
                    <div className={`admin-folio-form-info`}>
                        <input className={`admin-folio-input-text`} type='text' name='Title' placeholder='Titel' onChange={handleFormInputChange}/>
                        <input className={`admin-folio-input-text`} type='text' name='Description' placeholder='Beskrivning' onChange={handleFormInputChange}/>
                        <p>Fotograferingsdatum:</p>
                        <input className={`admin-folio-input-text`} type='date' name='PhotoTaken' onChange={handleFormInputChange}/>
                        <input className={`admin-folio-submit`} type='submit' value='Ladda upp'/>
                    </div>
                    <div className={`admin-folio-form-models`}>
                        <h3>Lista modeller i bilden:</h3><h3>Funktion kommer snart!</h3>
                    </div>
                </form>
            </div>
            <div className={`admin-array-container`}>
                {isLoading ? (
                    <RingLoader color="var(--link-highlight)"/>
                ):(
                    <div className={`img-array-padding`}>
                        {imgArray.length < 1 ? (
                            <>
                                <h1>Här var det tomt!</h1>
                                <p>Det verkar som att du inte har laddat upp några bilder ännu. Det gör inget!<br/>Börja med att ladda upp en bild så kommer den att komma upp på hemsidan.</p>
                            </>
                        ):(
                            imgArray.map((img) => {
                                return (
                                    <div key={img.id} className={`admin-img-container`}>
                                        <ImageEntry data={img}/>
                                    </div>
                                )
                            })
                        )}
                    </div>
                )}
            </div>
        </>
    )
}

export default AdminPortfolio
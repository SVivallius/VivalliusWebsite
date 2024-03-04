import './ImageControls.css'
import { useContext, useEffect, useState } from 'react'
import MobileContext from '../../assets/MobileContext.jsx'

import { HttpRequest } from '../../assets/HttpAgent'
import ImageComponent from './ImageComponent/ImageComponent'

function ImageControls() {
    const { isMobile } = useContext(MobileContext)
    const [imageArray, setImageArray] = useState(new Array)

    useEffect(() => {
        const populateImageArray = () => {
            let requestOptions = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            }
            HttpRequest('1/public/photos')
                .then((response) => response.json)
                .then((json) => {
                    let data = []
                    json.map((item) => {
                        data.push(item)
                    })
                    setImageArray(data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        populateImageArray()
    }, [])

    return (
        <>
            <ul>
                {imageArray.map((item) => {
                    return (
                        <li><ImageComponent imageData={item}/></li>
                    )
                })}
            </ul>
        </>
    )
}
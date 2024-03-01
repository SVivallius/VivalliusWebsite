import './styles/Portfolio.css'
import Image from '../components/image/Image.jsx'
import { HttpRequest } from '../assets/HttpAgent.js'

import { useContext, useEffect, useState } from 'react'
import MobileContext from '../assets/MobileContext'
import RingLoader from '../components/RingLoader/RingLoader.jsx'
import Fullview from '../components/Fullview/Fullview.jsx'

import { MockPhotos } from '../assets/mockItems.jsx'

function Portfolio() {
    const { isMobile } = useContext(MobileContext)

    // showImage is a bool, wether to show, or not, a fullscreen of the clicked image.
    // fullviewImage is the said image.
    const [showImage, setShowImage] = useState(false)
    const [fullviewImage, setFullviewImage] = useState(null)

    // The below states relates to the fetching of the images from API.
    const [imageArray, setImageArray] = useState(null)

    // Separate the columns
    const [oddImages, setOddImages] = useState(new Array)
    const [evenImages, setEvenImages] = useState(new Array)

    const imageMockArray = MockPhotos()
    const [oddMockImages, setOddMockImages] = useState(new Array)
    const [evenMockImages, setEvenMockImages] = useState(new Array)

    const requestOptions = {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }

    useEffect(() => {
        const populateMockArrays = () => {
            let odds = []
            let evens = []
            imageMockArray.map((item) => {
                {item.Id % 2 !== 0 ? (
                    odds.push(item)
                ) : (
                    evens.push(item)
                )}
            })
            setOddMockImages(odds)
            setEvenMockImages(evens)
        }
        populateMockArrays()
    }, [])

    // This useEffect fetches the images to the gallery from the API.
    useEffect(() => {
        const fetchData = () => {
            HttpRequest('public/photo', requestOptions)
                .then((response) => response.json)
                .then((json) => {
                    let data = []
                    let even = []
                    let odd = []
                    json.map((item) => {
                        data.push(item)
                        {item.Id % 2 == 0 ? (
                            even.push(item)
                        ) : (
                            odd.push(item)
                        )}
                    })
                    setImageArray(data)
                    setOddImages(odd)
                    setEvenImages(even)
                    console.log(imageArray)
                })
                .catch(error => {
                    console.log(error)
                    setImageArray(new Array)
                    console.log(imageArray)
                })
        }
        fetchData() 
    }, [])

    // Manages the fullview of the images.
    const handleFullView = (image) => {
        setFullviewImage(image)
        setShowImage(!showImage)
    }
    
    // Rendering
    return (
        <>
            {imageArray === null ? (
                <RingLoader color="var(--link-highlight)"/>
            ) : (
                <>
                    <div className={`image-container ${isMobile ? '' : 'desktop'}`}>
                        {fullviewImage !== null ? (
                            <Fullview isVisible={showImage} Image={fullviewImage} setFullView={setShowImage}/>
                        ) : ( <></> )}
                        <div className="portfolio-clm">
                            {oddMockImages.map((item) => {
                                return (
                                    <div className="image-holder" key={item.Id} onClick={() => handleFullView(item)}>
                                        <Image data={item}/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="portfolio-clm">
                            {evenMockImages.map((item) => {
                                return (
                                    <div className="image-holder" key={item.Id} onClick={() => handleFullView(item)}>
                                        <Image data={item}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default Portfolio

// Just a bunch of scratched down notes here.
// Nothing of importance.

//<Image data={image}/>
//{imageMockArray.map((item) => {
//    return (
//        <Image data={item} key={item.Id} isLeft={item.Id % 2 != 0}/>
//    )
//})}

//{imageMockArray.map((item) => {
//    return (
//        <div className="image-holder" key={item.Id} onClick={() => handleFullView(item)}>
//            <Image data={item}/>
//        </div>
//    )
//})}
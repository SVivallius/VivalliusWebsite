import './ImageEntry.css'
//import image from `src/assets/media/${data.photoPath}`
let image = require(`src/assets/media/${data.photoPath}`)

function ImageEntry ({data}) {
    return (
        <>
            <div className={`admin-flex`}>
                <div className={`admin-flex-clmn`}>
                    <img src={image} alt={data.title}/>
                </div>
                <div>
                    <h1>{data.title}</h1>
                </div>
            </div>
        </>
    )
}

export default ImageEntry
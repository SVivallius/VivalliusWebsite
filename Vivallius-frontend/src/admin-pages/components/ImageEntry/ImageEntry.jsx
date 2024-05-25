import './ImageEntry.css'
//let image = require(`src/assets/media/${data.photoPath}`)

function ImageEntry ({data}) {
    return (
        <>
            <div className={`admin-flex`}>
                <div className={`admin-flex-clmn`}>
                    <img src={`src/assets/media/${data.photoPath}`} alt={data.title}/>
                </div>
                <div>
                    <h1>{data.title}</h1>
                </div>
            </div>
        </>
    )
}

export default ImageEntry
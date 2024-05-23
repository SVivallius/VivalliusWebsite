import './ImageEntry.css'

function ImageEntry ({data}) {
    let path = data.photoPath
    return (
        <>
            <div className={`admin-flex`}>
                <div className={`admin-flex-clmn`}>
                    {console.log(data)}
                    <img src={`localhost:4982/src/assets/media/${data.photoPath}`} alt={data.title}/>
                </div>
                <div>
                    <h1>{data.title}</h1>
                </div>
            </div>
        </>
    )
}

export default ImageEntry
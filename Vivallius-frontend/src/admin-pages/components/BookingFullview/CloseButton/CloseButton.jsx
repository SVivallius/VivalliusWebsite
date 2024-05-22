import './CloseButton.css'

function CloseButton({close}) {
    return (
        <div className='close-btn-body' onClick={() => close(null)}>
            <div className='close-btn-cross'></div>
        </div>
    )
}

export default CloseButton
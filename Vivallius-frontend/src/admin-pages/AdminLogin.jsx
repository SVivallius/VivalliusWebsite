import './styles/AdminLogin.css'

import { useState, useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import MobileContext from '../assets/MobileContext.jsx'
import AdminContext from '../assets/AdminContext.jsx'

function AdminLogin () {
    const { adminArgs } = useContext(AdminContext)
    const { isMobile } = useContext(MobileContext)

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        adminArgs.Login({
            username: formData.username,
            password: formData.password
        })
    }

    return (
        <>
            {adminArgs.context.isLoggedIn == true ? (
                <Navigate to="/admin/" />
            ) : (
                <div className={`login-container ${isMobile ? '' : 'desktop'}`}>
                    <h1>Vivallius.se administratörspanel</h1>
                    <h2>Logga in nedan:</h2>
                    <div className={`login-form-container ${isMobile ? '' : 'desktop'}`}>
                        <form className={`login-form ${isMobile ? '' : 'desktop'}`} onSubmit={handleOnSubmit}>
                            <input className='login-text-field' type='name' name='username' placeholder='Användarnamn' onChange={handleInputChange}/>
                            <input className='login-text-field' type='password' name='password' placeholder='Lösenord' onChange={handleInputChange}/>
                            <input className='login-submit-btn' type='submit' value='Logga in'/>
                        </form>
                    </div>
                    <ul className={`login-links ${isMobile?'':'desktop'}`}>
                        <li><Link to="/">Besök sidan</Link></li>
                        <li><a href="mailto:stefan.vivallius@outlook.com">Problem att logga in?</a></li>
                    </ul>
                    <p></p>
                </div>
            )}
        </>
    )
}
export default AdminLogin
import React, { createContext, useState } from 'react'
import { HttpRequest } from './HttpAgent'
const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    const [context, setContext] = useState({
        isLoggedIn: true,
        token: "",
        tokenCreateTime: null
    })

    const CheckFirst = () => {
        let rqstOpt = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }
        HttpRequest('1/admin/login/isinit', rqstOpt)
            .then((response) => response.json())
            .then((json) => {
                if (json.isinit == true){
                    return true
                } else return false
            })
            .catch((error) => {
                return false
            })
    }

    const Login = (args) => {
        let rqstOpt = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: args.username,
                password: args.password
            })
        }
        HttpRequest('admin/login', rqstOpt)
            .then((response) => {
                if (response.status >= 200 && response.status < 300){
                    return response.json()
                } else {
                    throw new Error('Login failed: ' + response.statusText)
                }
            })
            .then((json) => {
                setContext({
                    isLoggedIn: json.isAdmin,
                    token: json.token,
                    tokenCreateTime: json.tokenCreateDate
                })
                return true
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const Logout = () => {
        let rqstOpt = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        }
        HttpRequest('admin/logout', rqstOpt)
            .then((response) => {
                if (response.status < 300){
                    return response.json()
                } else {
                    throw new Error
                }
            })
            .then((json) => {
                setContext({
                    isLoggedIn: false,
                    token: "",
                    tokenCreateTime: null
                })
                return true
            })
            .catch((error) => {
                return false
            })
    }

    const adminArgs = {
        context,
        Login,
        Logout,
        CheckFirst
    }

    return (
        <AdminContext.Provider value={{adminArgs}}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContext
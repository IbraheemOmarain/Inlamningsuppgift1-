import React, { useState, useContext } from "react"
import { UserContext } from '../shared/global/Provider/UserPrvider'



export const SigninView = () => {

    const [loggedInUser, setLoggedInUser] = useState()
    const [password, setPassword] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const login = () => {
        setAuthenticatedUser(loggedInUser)
    }
    return (
        <div>
            <h1>{loggedInUser}</h1>
            <span>User Name: </span> <input onChange={event => setLoggedInUser(event.target.value)} />
            <span>Password: </span> <input type="password" onChange={event => setPassword(event.target.value)} />
            <button onClick={() => login()}>Login</button>
        </div>
    )
}
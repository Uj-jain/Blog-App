import React, { useContext } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from './App'
import axios from 'axios'

function Navbar() {
    const user = useContext(userContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        axios.get('http://localhost:3001/logout')
            .then(res => {
                if (res.data === "Success")
                    navigate(0)
            }).catch(err => console.log(err))
    }

    return (
        <div className='navbar-header'>
            <div><h3>Blog App</h3></div>
            <div>
                <Link to="/" className='link'>Home</Link>
            </div>
            <div>
                {
                    user.username ?
                        <Link to="/create" className='link'>Create</Link>
                        : <></>
                }
            </div>
            <div>
                {
                    user.username ?
                        <Link to="/user" className='link'>Profile</Link>
                        : <></>
                }

            </div>
            {
                user.username ?
                    <div>
                        <input type="button" onClick={handleLogout} value="Logout" className='btn_input' />
                    </div>
                    :
                    <div><h5><Link to="/register" className="link">Register/Login</Link></h5></div>

            }
        </div>
    )
}

export default Navbar
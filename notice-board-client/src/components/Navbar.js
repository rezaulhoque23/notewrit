import React from 'react'
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className='container '>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to={'/'}>NOTEWRIT</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'}>Public Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Private Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/'}>Profiles</Link>
                        </li>
                    </ul>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={'/login'}>Login</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to={'/register'}>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
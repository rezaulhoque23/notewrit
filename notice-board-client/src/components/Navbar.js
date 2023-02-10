import React from 'react'
const Navbar = () => {
    return (
        <div className='container '>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">NOTEWRIT</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Public Post</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Private Post</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Profiles</a>
                        </li>
                    </ul>
                    <div>
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
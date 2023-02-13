import React from 'react'
import Navbar from '../../components/Navbar'
import PostComponent from '../../components/PostComponent'
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className='bg-light'>
                <Navbar />
            </div>
            <div className='container mt-5'>
                <h4>Public Post</h4>
                <div className='row'>
                    <div className='col-lg-9'>
                        <div className='row mt-2'>
                            <div className='col-lg-6 mt-3'>
                                <PostComponent />
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <PostComponent />
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <PostComponent />
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <PostComponent />
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <PostComponent />
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <PostComponent />
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <PostComponent />
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <PostComponent />
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <PostComponent />
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <PostComponent />
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <PostComponent />
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <PostComponent />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className="card mt-4">
                            <div className="card-header">
                                Top Profiles
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><Link className='pointer'>An item</Link></li>
                                    <li className="list-group-item"><Link className='pointer'>An item</Link></li>
                                    <li className="list-group-item"><Link className='pointer'>An item</Link></li>
                                    <li className="list-group-item"><Link className='pointer'>An item</Link></li>
                                    <li className="list-group-item"><Link className='pointer'>An item</Link></li>
                                    <li className="list-group-item"><Link className='pointer'>An item</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-5 bg-light">
                <div className="card-body">
                    <p className='m-0 text-center'>Public Profile</p>
                </div>
            </div>
        </>
    )
}

export default Home
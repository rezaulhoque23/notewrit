import React from 'react'
import Navbar from '../../components/Navbar'
import PostComponent from '../../components/PostComponent'

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
                        <div class="card mt-4">
                            <div class="card-header">
                                Top Profiles
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><a className='pointer'>An item</a></li>
                                    <li class="list-group-item"><a className='pointer'>An item</a></li>
                                    <li class="list-group-item"><a className='pointer'>An item</a></li>
                                    <li class="list-group-item"><a className='pointer'>An item</a></li>
                                    <li class="list-group-item"><a className='pointer'>An item</a></li>
                                    <li class="list-group-item"><a className='pointer'>An item</a></li>
                                    <li class="list-group-item"><a className='pointer'>An item</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mt-5 bg-light">
                <div class="card-body">
                    <p className='m-0 text-center'>Public Profile</p>
                </div>
            </div>
        </>
    )
}

export default Home
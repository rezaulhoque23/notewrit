import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { register } from '../../controller/api';

function Register() {
    const [errMsg, setErrMsg] = useState();
    const [successMsg, setSuccessMsg] = useState();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        c_password: '',
    });
    const handleInput = (e) => {
        let nameField = e.target.name;
        let nameValue = e.target.value;
        setData({
            ...data,
            [nameField]: nameValue
        });
    }
    const validate = () => {
        let isValidate = null;
        if (data.password !== data.c_password) {
            isValidate = 'Password Not Match';
        }
        if (data.password === '') {
            isValidate = 'Password cannot be empty';
        }
        if (data.c_password === '') {
            isValidate = 'Confirm password cannot be empty';
        }
        if (data.email === '') {
            isValidate = 'Email cannot be empty';
        }
        if (data.name === '') {
            isValidate = 'Name cannot be empty';
        }
        return isValidate;
    }
    const saveRegister = async () => {
        setErrMsg('')
        setSuccessMsg('')
        if (validate() == null) {
            let res = await register(data)
            if (res.status === 400) {
                setErrMsg(res.data.message);
                console.log(res.status)
            }

            if(res.status===201){
                setSuccessMsg(res.data.message)
            }

        } else {
            setErrMsg(validate())
        }
    }
    return (
        <>
            <div className='bg-light'>
                <Navbar />
            </div>
            <div className='container mt-5'>

                <div className='row'>
                    <div className='col-lg-6 m-auto'>
                        <div className="card bg-light mb-2">
                            <div className="card-body">
                                <h4 className='text-center m-0'>Register Page</h4>
                            </div>
                        </div>
                        <div className="card bg-light">
                            <div className="card-body">
                                {errMsg && <small className='text-white bg-danger p-1'>{errMsg}</small>}
                                {successMsg && <small className='text-white bg-success p-1'>{successMsg}</small>}
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" onChange={handleInput} className="form-control" name='name' id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" onChange={handleInput} className="form-control" name='email' id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" onChange={handleInput} className="form-control" name='password' id="password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="c_password">Confirm Password</label>
                                    <input type="password" onChange={handleInput} className="form-control" name='c_password' id="c_password" />
                                </div>
                                <button type="button" className="btn btn-primary" onClick={saveRegister}>Register</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register
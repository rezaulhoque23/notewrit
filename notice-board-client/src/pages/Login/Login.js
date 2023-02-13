import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { loginUser } from '../../controller/api';

function Login() {
  const [errMsg, setErrMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const [data, setData] = useState({
    email: '',
    password: ''
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
    if (data.password === '') {
      isValidate = 'Password cannot be empty';
    }
    if (data.email === '') {
      isValidate = 'Email cannot be empty';
    }
    return isValidate;
  }
  const login = async () => {
    setErrMsg('')
    setSuccessMsg('')
    if (validate() == null) {
      let res = await loginUser(data)
      if (res.status === 404) {
        setErrMsg(res.data.message);
      }

      if (res.status === 200) {
        setSuccessMsg(res.data.message)
      }

    } else {
      setErrMsg(validate());
    }
  }

  return (
    <>
      <div className='bg-light'>
        <Navbar />
      </div>
      <div className='container mt-5'>

        <div className='row'>
          <div className='col-lg-5 m-auto'>
            <div className="card bg-light mb-2">
              <div className="card-body">
                <h4 className='text-center m-0'>Login Page</h4>
              </div>
            </div>
            <div className="card bg-light">
              <div className="card-body">
                {errMsg && <small className='text-white bg-danger p-1'>{errMsg}</small>}
                {successMsg && <small className='text-white bg-success p-1'>{successMsg}</small>}
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" name='email' onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" name='password' onChange={handleInput} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="button" onClick={login} className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
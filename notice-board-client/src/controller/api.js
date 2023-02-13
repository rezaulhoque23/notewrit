import axios from 'axios';

const BaseUrl = 'http://localhost:8000';

async function postRequest(postData, url, token = false) {
    try {
        let headerData = (token !== false) ? {
            'Authorization': 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        } : {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        const config = {
            method: 'post',
            url: BaseUrl + url,
            headers: headerData,
            data: postData
        }
        let response = await axios(config);
        return response;
    } catch (error) {
        return error.response;
    }
}

async function getRequest(url, token = false) {
    try {
        let headerData = (token !== false) ? {
            'Authorization': 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        } : {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        const config = {
            method: 'get',
            url: BaseUrl + url,
            headers: headerData,
        }
        let response = await axios(config);
        return response;
    } catch (error) {
        return 'Network Error';
    }
}

export const register = async (data) => {
    // console.log(data,BaseUrl);
    const url = '/register';
    const res = await postRequest(data, url);
    if (res.status === 201) {
        return res;
    } else {
        return res;
    }
}

export const loginUser = async (data) => {
    // console.log(data,BaseUrl);
    const url = '/login';
    const res = await postRequest(data, url);
    if (res.status === 200) {
        return res;
    } else {
        return res;
    }
}


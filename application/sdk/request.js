require('../config');
const axios = require('axios');


const apiHost = process.env.HOST;


async function request(method = '', url = '', data = {}) {
    try {
        let res = await axios(getOptions(method, url, data));
        return {body: res.data, statusCode: res.status};
    }
    catch (error) {
        if (error.response.data && error.response.status) {
            return {body: error.response.data, statusCode: error.response.status};
        } else {
            console.log(error);
            return {body: 'ERROR de axios', statusCode: 999};
        }
    }
}


function getOptions(method, url, data) {
    return {
        url,
        baseURL: apiHost,
        method,
        headers: {
            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
        },
        responseType: 'json',
        responseEncoding: 'utf8',
        data
    };
}


module.exports = request;
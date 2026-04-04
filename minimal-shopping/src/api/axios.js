import axios from 'axios';

const axiosInstance=axios.create({
    baseURL:'https://dummyjson.com',
    headers:{
        'content-Type':'application/json',
    },
});
export default axiosInstance;
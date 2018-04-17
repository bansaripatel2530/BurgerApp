import axios from "axios";

const instance = axios.create({
    baseURL : "https://demoappaddmob.firebaseio.com/"
})

export default instance;
import axios from "axios";

const api = axios.create({
    baseURL: "https://react-auth-back1-2.onrender.com",
    timeout: 5000
});

api.interceptors.request.use(

    function(config) {

        const token = localStorage.getItem("token");

        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },

    function(error) {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(

    function(response) {
        
        console.log("Response received");
        return response;
    },

    function(error) {

        if(error.response?.status === 401 && localStorage.getItem("token")) {

            localStorage.removeItem("token");
            window.location.href = "/";
        }
        return Promise.reject(error);
    }

);

export default api;
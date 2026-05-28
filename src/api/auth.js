import api from "./axios";

export async function loginUser(email, password) {

    try {

        const response = await api.post("/login", {email, password});
        return response;

    } catch(error) {

        return error.response;
    }
}

export async function registerUser(email, password) {

    try {

        const response = await api.post("/register", {email, password});
        return response;

    } catch(error) {

        return error.response;
    }
}

export async function getProfile() {

    try {
        
        const response = await api.get("/profile");
        return response;

    } catch(error) {

        return error.response;
    }
}
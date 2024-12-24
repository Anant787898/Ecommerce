import axios from "axios"

const Base_URL = "http://localhost:8000/api/v1/"

export const userRequest = axios.create({
    baseURL: Base_URL
})
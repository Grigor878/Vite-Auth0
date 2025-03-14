import axios from "axios";

const { MODE, VITE_BASE_URL_DEV, VITE_BASE_URL_RELEASE } = import.meta.env;

const baseURL = MODE === "development" ? VITE_BASE_URL_DEV : VITE_BASE_URL_RELEASE;

const instance = axios.create({
    baseURL,
});

export default instance;
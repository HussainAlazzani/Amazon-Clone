import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/project-91850/us-central1/api"  // The api cloud function url
});

export default instance;
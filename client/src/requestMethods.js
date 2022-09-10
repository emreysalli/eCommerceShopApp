import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTBjYmFiODZjMjlhODVhZDhmODE5MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjU4NjM5NCwiZXhwIjoxNjYyODQ1NTk0fQ.jdffds_0rF5M-CTiauxFrY2rSBiitkUI8UvoQm1JQKc";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
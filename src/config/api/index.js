import axios from 'axios';

const baseURL = 'https://630443b20de3cd918b443976.mockapi.io/';

const mockApi = axios.create({
    baseURL: String(baseURL)
});

export default mockApi;
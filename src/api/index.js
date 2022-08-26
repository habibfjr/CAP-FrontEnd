import mockApi from '../config/api';

const api = {
    getAll: (page, limit) =>
        mockApi.get(
            `/products?page=${page}&limit=${limit}`
        ),
    getById: id => mockApi.get(`/products/${id}`)
};

export default api;
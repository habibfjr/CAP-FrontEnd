import mockApi from '../config/api';

const api = {
  getAll: () =>
  mockApi.get(
      `/products`
    ),
  getById: id => mockApi.get(`/products/${id}`)
};

export default api;
import api from './dataAccess';

export const getUser = (id) => api.get(`/users/${id}`);
export const createUser = (userData) => api.post('/users', userData);
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);
export const patchUser = (userData) => api.patch(`/users/${id}`, userData);
export const deleteUser = (id) => api.delete(`/users/${id}`);

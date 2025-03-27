import { ApiClient } from './ApiClient';

const api = new ApiClient();

export const signup = async (body) => await api.post('user/signup', body);

export const signin = async (body) => await api.post('', body);

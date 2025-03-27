import { Cookies } from 'react-cookie';

const baseURL = `http://192.168.1.7:4000/v1/`;

export class ApiClient {
  async request(method, endpoint, data, params = {}, type = 'json') {
    let url = `${baseURL}${endpoint}`;

    Object.keys(params).forEach((key, index) => {
      url =
        index === 0
          ? `${url}?${key}=${params[key]}`
          : `${url}&${key}=${params[key]}`;
    });

    const cookie = new Cookies();
    const token = cookie.get('token');

    const tokenObject = { Authorization: `Bearer ${token}` };

    const contentType = type !== 'formData' && {
      'Content-Type': 'application/json',
    };

    const apiConfig = {
      withCredentials: true,
      headers: {
        Accept:
          type !== 'formData' ? 'application/json' : 'multipart/form-data',
        ...contentType,
        ...tokenObject,
      },
    };

    const body = method !== 'GET' && {
      body: type !== 'formData' ? JSON.stringify(data) : data,
    };

    console.log('method', method);
    console.log('params', params);
    console.log('type', type);
    console.log('url', url);
    console.log('config', apiConfig);
    console.log('token', token);
    console.log('body', body);

    return await fetch(url, {
      ...apiConfig,
      method,
      ...body,
    })
      .then((response) => response.json())
      .catch((error) => error);
  }

  async post(endpoint, data, params, type) {
    return this.request('POST', endpoint, data, params, type);
  }

  async put(endpoint, data, params) {
    return this.request('PUT', endpoint, data, params);
  }

  async get(endpoint, params) {
    return this.request('GET', endpoint, null, params);
  }

  async delete(endpoint, data, params) {
    return this.request('DELETE', endpoint, data, params);
  }
}

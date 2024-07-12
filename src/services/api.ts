import fetch from 'isomorphic-unfetch';

const api = {
  async post(url, data) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json());
  },
};

export default api;
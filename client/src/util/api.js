import axios from 'axios';

export default {
  get: (id) => {
    return axios({
      method: 'GET',
      url: '/buckets',
      params: {
        id: id
      }
    })
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  put: (id, color) => {
    return axios({
      method: 'PUT',
      url: '/buckets',
      data: {
        id: id,
        color: color
      }
    })
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  }
};
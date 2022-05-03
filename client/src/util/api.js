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
  }
};
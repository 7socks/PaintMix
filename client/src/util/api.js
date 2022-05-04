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
  },
  post: (data) => {
    return axios({
      method: 'POST',
      url: '/buckets',
      data: data
    })
      .then(({data}) => {
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getHome: () => {
    return axios({
      method: 'GET',
      url: 'buckets/all'
    })
      .then(({data}) => {
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getAll: () => {
    return axios({
      method: 'GET',
      url: 'buckets/browse'
    })
      .then(({data}) => {
        return data;
      })
      .catch((err) => {
        console.error(err);
      });
  }
};
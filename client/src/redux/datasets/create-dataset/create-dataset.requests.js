import API_SERVICE from '@Utils/http/http';

export default {
  createDataset: async (data) => {
    try {
      const response = await API_SERVICE.post('/files/uploads', data);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

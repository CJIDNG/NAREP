import API_SERVICE from '@Utils/http/http';

export default {
  deleteDataset: async ({ slug }) => {
    try {
      const response = await API_SERVICE.delete(`/files/${slug}`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

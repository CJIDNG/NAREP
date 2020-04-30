import API_SERVICE from '@Utils/http/http';

export default {
  updateDataset: async ({ slug, formData }) => {
    try {
      const response = await API_SERVICE.post(`/files/${slug}`, formData);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

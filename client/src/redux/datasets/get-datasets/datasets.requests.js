import API_SERVICE from '@Utils/http/http';

export default {
  fetchDatasets: async (page, sectorId) => {
    try {
      if (sectorId) {
        const response = await API_SERVICE.get(`/files?page=${page}&limit=10&sectorId=${sectorId}`);
        return response;
      }
      const response = await API_SERVICE.get(`/files?page=${page}&limit=10`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  fetchSectors: async () => {
    try {
      const response = await API_SERVICE.get('/files/sectors');
      return response;
    } catch (error) {
      return error.response;
    }
  },
  fetchSingleDataset: async (slug) => {
    try {
      const response = await API_SERVICE.get(`/files/${slug}`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  searchDataset: async (searchKey) => {
    try {
      const response = await API_SERVICE.get(`/files/search?searchKey=${searchKey}`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

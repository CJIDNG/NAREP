import API_SERVICE from '@Utils/http/http';

export default {
  fetchPolicyPapers: async (page) => {
    try {
      const response = await API_SERVICE.get(`/policy-paper?page=${page}&limit=10`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

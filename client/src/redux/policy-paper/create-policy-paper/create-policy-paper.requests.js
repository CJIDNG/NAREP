import API_SERVICE from '@Utils/http/http';

export default {
  createPolicyPaper: async (data) => {
    try {
      const response = await API_SERVICE.post('policy-paper/uploads', data);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

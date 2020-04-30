import API_SERVICE from '@Utils/http/http';

export default {
  updatePolicyPaper: async ({ slug, formData }) => {
    try {
      const response = await API_SERVICE.post(`/policy-paper/${slug}`, formData);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

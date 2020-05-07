import API_SERVICE from '@Utils/http/http';

export default {
  fetchPosts: async (tags) => {
    try {
      if (tags) {

        const response = await API_SERVICE.get(`/posts?tags=${tags}`);
        return response;
      }
      const response = await API_SERVICE.get(`/posts`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  fetchTags: async () => {
    try {
      const response = await API_SERVICE.get(`/posts/tags`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  fetchSinglePost: async (slug) => {
    console.log(slug)
    try {
      const response = await API_SERVICE.get(`/posts/${slug}`);

      return response;
    } catch (error) {
      return error.response;
    }
  },
};

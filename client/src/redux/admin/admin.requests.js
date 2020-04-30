import API_SERVICE from '@Utils/http/http';

export default {
  fetchUsers: async () => {
    try {
      const response = await API_SERVICE.get('/admin/users');
      return response;
    } catch (error) {
      return error.response;
    }
  },
  deleteUser: async (email) => {
    try {
      const response = await API_SERVICE.delete(`/admin/user/${email}`);
      return response;
    } catch (error) {
      return error.response;
    }
  },
  updateUser: async ({ email, role }) => {
    try {
      const response = await API_SERVICE.patch(`/admin/user/${email}`, role);
      return response;
    } catch (error) {
      return error.response;
    }
  },
};

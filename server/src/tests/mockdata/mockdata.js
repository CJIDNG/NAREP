
export const adminSignin = {
  email: 'nareptest@admin.com',
  password: 'Password124',
};

export const userSignin = {
  email: 'johndoe@test.com',
  password: 'PasswoRD123__',
};

export const newUserSignup = {
  username: 'Jand Doe',
  email: 'nareptest@admin.com',
  password: 'Password124',
  confirmPassword: 'Password124',
};

export const emptyUserData = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const getUserData = (args) => ({
  ...newUserSignup,
  ...args,
});

export const newPost = {
  title: 'Title is required',
  body: 'Body is required',
  description: 'Description is required',
  plainText: 'PlainText is required',
};
export const updateExistingPost = {
  title: 'A new Title is required',
};

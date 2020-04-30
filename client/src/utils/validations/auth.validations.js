export default (validator) => [{
  field: 'email',
  check: validator.isEmail,
  message: 'Invalid email address'
},
{
  field: 'username',
  args: [{
    min: 3,
    max: 15
  }],
  check: validator.isLength,
  message: 'Username must be between 3 - 15 characters long'
},
{
  field: 'password',
  check: validator.isLength,
  args: [{
    min: 6,
    max: 15
  }],
  message: 'Password must be between 6 - 15 characters long'
},
{
  field: 'confirmPassword',
  check: (fields) => fields.password === fields.confirmPassword,
  custom: true,
  message: 'Passwords do not match'
}
];

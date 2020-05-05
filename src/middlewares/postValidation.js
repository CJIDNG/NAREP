
import { check, validationResult } from 'express-validator';

const PostValidation = {
  postValidation: [
    check('title')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Title is required'),
    check('body')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Body is required'),
    check('description')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Description is required')
      .trim(),
    check('plainText')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('PlainText is required')
      .trim(),
    (req, res, next) => {
      const errors = validationResult(req);
      const errorMessage = {};
      if (!errors.isEmpty()) {
        errors.array({ onlyFirstError: true }).forEach((error) => {
          errorMessage[error.param] = error.msg;
        });
        return res.status(400).json({
          errors: errorMessage,
        });
      }
      return next();
    },
  ],
};
export default PostValidation;

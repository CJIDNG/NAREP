import express from 'express';
import {
  createNewPost, updatePost, getPostBySlug, getAllPosts, getTags
} from '../../controller/post/postController';
import { verifyAdmin, verifyUser } from '../../middlewares/authorization';
import PostValidation from '../../middlewares/postValidation';

const { postValidation } = PostValidation;
const router = express.Router();

router.post('/', verifyUser, verifyAdmin, postValidation, createNewPost);
router.patch('/:id', verifyUser, verifyAdmin, updatePost);
router.get('/tags', getTags);
router.get('/:slug', getPostBySlug);
router.get('/', getAllPosts);


export default router;

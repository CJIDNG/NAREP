import express from 'express';
import multer from 'multer';
import {
  createNewPost, getPostBySlug, getAllPosts, getTags, deletePost
} from '../../controller/post/postController';
import { verifyAdmin, verifyUser } from '../../middlewares/authorization';
import PostValidation from '../../middlewares/postValidation';

const upload = multer({ dest: '/tmp/' });
const { postValidation } = PostValidation;
const router = express.Router();

router.post('/', verifyUser, verifyAdmin, upload.single('file'), postValidation, createNewPost);
router.get('/tags', getTags);
router.get('/:slug', getPostBySlug);
router.get('/', getAllPosts);
router.delete('/:slug', verifyUser, verifyAdmin, deletePost)
export default router;

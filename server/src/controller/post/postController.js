import model from '../../database/models';
import { successResponse, errorResponse } from '../../helpers/serverResponse';
import { pagination, generateTag } from '../../helpers/utils';

const { Post, PostTag } = model;

export const createNewPost = async (req, res, next) => {
  const {
    body: {
      title, body, description, plainText, bannerImage, tags
    },
  } = req;
  try {
    const createdPost = await Post.create({
      title,
      body,
      description,
      plainText,
      bannerImage,
      tags
    });
    if (tags) await generateTag(tags, createdPost.id, PostTag, Post);
    return successResponse(res, 201, 'post', {
      message: 'post has been created successfully!',
      createdPost,
    });
  } catch (error) {
    return next(error);
  }
};

export const updatePost = async (req, res, next) => {
  const {
    params: { id },
    body: {
      title, body, description, plainText, bannerImage,
    },
  } = req;
  try {
    const post = await Post.findOne({
      where: { id },
    });
    if (!post) {
      return errorResponse(res, 404, { message: 'Post not found' });
    }
    const updatedPost = await post.update({
      title,
      body,
      description,
      plainText,
      bannerImage,
    },
      {
        where: { id },
        returning: true,
      });
    return successResponse(res, 200, 'post', {
      message: 'Post has been updated successfully!',
      updatedPost,
    });
  } catch (error) {
    return next(error);
  }
};


export const getPostById = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const post = await Post.findAndCountAll({
      order: [['updatedAt', 'DESC']],
      where: { id },
    });
    console.log(post)
    if (!post) {
      return errorResponse(res, 404, { message: 'Post not found' });
    }
    return successResponse(res, 200, 'post', post);
  } catch (error) {
    return next(error);
  }
};


export const getAllPosts = async (req, res, next) => {
  try {
    const { query: { page, limit } } = req;
    const pageNumber = pagination(page, limit);
    const posts = await Post.findAndCountAll({
      offset: pageNumber.offset,
      limit: pageNumber.limit,
      order: [['updatedAt', 'DESC']],
      subQuery: false,
    });
    const { rows: allPosts, count: postsCount } = posts;
    return successResponse(res, 200, 'posts', { postsCount, allPosts });
  } catch (error) {
    return next(error);
  }
};

export const getPostByTag = async (req, res, next) => {
  const { query: { id } } = req;
  try {
    const posts = await PostTag.findAndCountAll({
      order: [['updatedAt', 'DESC']],
      attributes: ['id', 'name'],
      include: [
        {
          model: Post,
          as: 'posts',
          through: { attributes: [] },
        },
      ],
      where: { id },
    });
    const { rows: allPosts, count: postsCount } = posts;
    return successResponse(res, 200, 'posts', { postsCount, allPosts });
  } catch (error) {
    return next(error);
  }
};

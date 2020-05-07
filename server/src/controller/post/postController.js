import model from '../../database/models';
import fs from 'fs';
import { successResponse, errorResponse } from '../../helpers/serverResponse';
import { pagination, generateTag } from '../../helpers/utils';

const { Post, PostTag, PostImage } = model;

export const createNewPost = async (req, res, next) => {
  const {
    body: {
      title, body, description, plainText, bannerImage, tags
    },
    file: {
      path, originalname,
    },
  } = req;
  try {
    const file = `${global.appRoot}/uploads/${originalname}`;
    const createdPost = await Post.create({
      title,
      body,
      description,
      plainText,
      bannerImage,
      tags
    });
    const newImage = {
      postId: createdPost.id,
      fileName: originalname
    }
    const postImage = await PostImage.create(newImage);
    if (tags) await generateTag(tags, createdPost.id, PostTag, Post);
    fs.rename(path, file, () => (postImage));
    return successResponse(res, 201, 'post', {
      message: 'post has been created successfully!', createdPost
    });
  } catch (error) {
    console.log(error)
    return next(error);
  }
};


export const getPostBySlug = async (req, res, next) => {
  try {
    const { params: { slug } } = req;
    const post = await Post.findOne({
      order: [['updatedAt', 'DESC']],
      where: { slug },
    });
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
    const { query: { page, limit, tags } } = req;
    const pageNumber = pagination(page, limit);
    if (tags) {
      const posts = await PostTag.findAndCountAll({
        order: [['updatedAt', 'DESC']],
        attributes: {
          exclude: ['id', 'name', 'createdAt', 'updatedAt'],
        },
        include: [
          {
            model: Post,
            as: 'posts',
            through: { attributes: [] },
          },
        ],
        where: { id: tags },
      });

      const { rows: collection, count: postsCount } = posts;
      const allPosts = collection[0].posts
      return successResponse(res, 200, 'posts', { postsCount, allPosts });
    }
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


export const getTags = async (req, res, next) => {
  try {
    const tags = await PostTag.findAll({
      order: [['updatedAt', 'DESC']],
      subQuery: false,
      attributes: ['id', 'name'],
    });
    return successResponse(res, 200, 'tags', tags);
  } catch (error) {
    return next(error);
  }
};

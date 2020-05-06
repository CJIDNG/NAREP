import { createUniqueSlug, calculateReadTime, removeDuplicateFromArray } from '../../helpers/utils';

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    bannerImage: {
      type: DataTypes.TEXT,
      defaultValue: 'https://unsplash.com/photos/IdR3xJFstW0',
      allowNull: false,
    },
    title: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    description: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    plainText: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    readTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    body: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    slug: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true,
    },
  }, {});
  Post.beforeCreate((newPost) => {
    newPost.slug = createUniqueSlug(newPost.title);
    newPost.readTime = calculateReadTime(newPost.plainText);
  });

  Post.associate = (models) => {
    Post.belongsToMany(models.PostTag, {
      through: 'TagPosts',
      as: 'tags',
      foreignKey: 'postId',
      onDelete: 'CASCADE',
    });
  };
  return Post;
};

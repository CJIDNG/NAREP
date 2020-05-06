/* eslint-disable no-unused-vars */

module.exports = (sequelize, DataTypes) => {
  const PostTag = sequelize.define('PostTag', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
  }, {});
  PostTag.associate = (models) => {
    PostTag.belongsToMany(models.Post, {
      through: 'TagPosts',
      as: 'posts',
      foreignKey: 'tagId',
      onDelete: 'CASCADE',
    });
  };
  return PostTag;
};

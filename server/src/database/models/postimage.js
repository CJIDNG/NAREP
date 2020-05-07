module.exports = (sequelize, DataTypes) => {
  const PostImage = sequelize.define('PostImage', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    postId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Posts',
        key: 'id',
        as: 'postId',
      },
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  PostImage.associate = (models) => {
    PostImage.belongsTo(models.Post, {
      foreignKey: 'postId',
      target: 'id',
      as: 'post',
      onDelete: 'CASCADE',
    });
  };
  return PostImage;
};

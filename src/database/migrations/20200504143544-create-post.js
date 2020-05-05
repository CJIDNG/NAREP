
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Posts', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    bannerImage: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    plainText: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    body: {
      type: Sequelize.JSONB,
      allowNull: false,
    },
    slug: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
    },
    readTime: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Posts'),
};

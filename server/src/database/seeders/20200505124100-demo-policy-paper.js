module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'PolicyPapers',
    [
      {
        id: 'ab8b9dd2-22bc-4dc2-b2dd-942a5dcb5437',
        title: 'lorem',
        slug: 'lorem-12939933',
        userId: '5b8e15ed-2113-4e58-a533-c24d1b09d856',
        fileType: 'png',
        fileName: '0f15239e8b1aa04c0023fc38fd790795',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('PolicyPapers', null, {}),
};

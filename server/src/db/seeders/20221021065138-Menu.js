/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Menus', [
      {
        title: 'Beef stroganoff',
        description: 'The best dish',
        price: 456.20,
        category: 'Main courses',
      },
      {
        title: 'Chicken curry',
        description: 'Indian dish',
        price: 300.22,
        category: 'Main courses',
      },
      {
        title: 'Salmon steak',
        description: 'Fresh salmon',
        price: 501.23,
        category: 'Main courses',
      },
      {
        title: 'Russian borsch',
        description: 'Borsch and bread',
        price: 323.23,
        category: 'Soups',
      },
      {
        title: 'Mushroom soup',
        description: 'The classic soup',
        price: 433.45,
        category: 'Soups',
      },
      {
        title: 'Vodka',
        description: '40 degrees',
        price: 350.00,
        category: 'Drinks',
      },
      {
        title: 'Craft beer',
        description: 'The best beer',
        price: 199.99,
        category: 'Drinks',
      },
      {
        title: 'Cider',
        description: 'Dry cider',
        price: 280.32,
        category: 'Drinks',
      },
      {
        title: 'Fish and chips',
        description: 'You"ll like it',
        price: 350.22,
        category: 'Snacks',
      },
      {
        title: 'Sandwich',
        description: 'Chicken inside',
        price: 222.22,
        category: 'Snacks',
      },
      {
        title: 'Caesar salad',
        description: 'With chicken or shrimps',
        price: 499.99,
        category: 'Salads',
      },
      {
        title: 'Tomato and cucumber',
        description: 'Only it',
        price: 99.99,
        category: 'Salads',
      },
      {
        title: 'Mineral water',
        description: '0.3 l',
        price: 119.99,
        category: 'N/A drinks',
      },
      {
        title: 'Orange juice',
        description: 'Fresh 0.3l',
        price: 170,
        category: 'N/A drinks',
      },
      {
        title: 'Ice cream',
        description: 'Vanilla, chocolate',
        price: 150,
        category: 'Deserts',
      },
      {
        title: 'Cheese cake',
        description: '200g',
        price: 190,
        category: 'Deserts',
      },
      {
        title: 'Hamburger',
        description: '300g',
        price: 690,
        category: 'Burgers',
      },
      {
        title: 'Cheeseburger',
        description: '300g',
        price: 790,
        category: 'Burgers',
      },
      {
        title: 'Pepperoni',
        description: '36 см',
        price: 550,
        category: 'Pizza',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Menus', null, {});
  },
};

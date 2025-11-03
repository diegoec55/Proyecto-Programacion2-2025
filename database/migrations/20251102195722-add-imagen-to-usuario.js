'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'imagen', { 
      type: Sequelize.STRING(255),
      allowNull: true,
      after: 'email'
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'imagen');
  }
};

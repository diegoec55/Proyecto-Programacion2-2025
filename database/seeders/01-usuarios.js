'use strict';

const { query } = require('express-validator');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('usuarios',[
          {
            nombre: "Diego Comisso",
            email: "diego@gmail.com",
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            nombre: "Juan Gomez",
            email: "juan@gmail.com",
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            nombre: "Pedro Martinez",
            email: "pedro@gmail.com",
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            nombre: "Araceli Gonzalez",
            email: "Araceli@gmal.com",
            created_at: new Date(),
            updated_at: new Date()
          },
        ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {})
  }
};

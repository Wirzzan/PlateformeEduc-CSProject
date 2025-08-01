'use strict';
//CORRECTION du TYPE de la colonne "statut" des tâches de BOOLEAN à STRING

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Taches', 'statut', {
      type: Sequelize.STRING,
      allowNull: true // ou false si c'est requis
    });
  },

  async down (queryInterface, Sequelize) {
// Pour annuler ce changement si besoin
    await queryInterface.changeColumn('Taches', 'statut', {
      type: Sequelize.BOOLEAN,
      allowNull: true
    });
  }
};

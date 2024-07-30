"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return [
      queryInterface.addColumn("Flights", "BoardingGate", Sequelize.STRING),
    ];

    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      depatureAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      depatureTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 7800,
      },
      NumberOfSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      //Boarding gate
    });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.dropTable("Flights");
  },
};

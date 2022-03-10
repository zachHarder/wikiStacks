const Sequelize = require("sequelize");
const db = require("./db");

const User = db.define(`User`, {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = User;

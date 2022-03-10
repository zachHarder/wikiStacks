const Sequelize = require("sequelize");
const db = require("./db");

const Page = db.define(`page`, {
  title: Sequelize.STRING,
  slug: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
  content: Sequelize.TEXT,
  status: Sequelize.BOOLEAN,
});

module.exports = Page;

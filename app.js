const express = require(`express`);
const app = express();
const morgan = require(`morgan`);
const layout = require(`./views/layout`);
const { db, Page, User } = require(`./models`);
//const db = require(`./models/db`);

async function authenticate() {
  await db.authenticate();
  console.log(`connected to database`);
}
authenticate();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log(`hello world`);
  res.send(layout(``));
});

const PORT = 1338;

app.listen(PORT, async () => {
  await db.sync();
  console.log(`app listening in port ${PORT}`);
});

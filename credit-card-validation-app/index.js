const express = require("express");
const bodyParser = require("body-parser");
const validateCreditCard = require("./validateCreditCard"); // You'll create this module
const cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());

app.post("/validate", (req, res) => {
  const { creditCardNumber } = req.body;
  const isValid = validateCreditCard(creditCardNumber);

  res.json({ isValid });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

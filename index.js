const express = require("express");
const cors = require('cors');
const productRoutes = require("./routes/products");
const moviesRoutes = require("./routes/movies");
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;




const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes which should handle requests
app.use("/", productRoutes);
app.use("/products", productRoutes);
app.use("/movies", moviesRoutes);


app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
  
app.post('/api/world', (req, res) => {
console.log(req.body);
res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
  
module.exports = app;
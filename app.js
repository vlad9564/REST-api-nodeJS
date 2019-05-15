const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config')

const app = express();


app.use(cors());
app.use(bodyParser.json());

// Import Routes

const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);

//MIDLEWARES


//Connection 
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("We are connected");
})


//ROUTES
app.get('/', (req, res) => {
    res.send("We are on home");
});



app.listen(3000);
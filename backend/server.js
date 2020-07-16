const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 4000;

// Define middleware here
app.use(cors());
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
    // app.use(express.static("client/build"));
}

app.get('/', (req, res) => {
    res.send(" server connected successfuly .....\n");
});

// Connect to the Mongo DB
try {
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('Mongodb connected successfuly !')
} catch (error) {
    console.log(" error.message");
 
}


// Start the API server
app.listen(PORT, () => {
    console.log(`API Server now listening on PORT ${PORT}!`)
})
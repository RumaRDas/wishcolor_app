const express = require('express');
const cors = require('cors');
const app =express();

const PORT = process.env.PORT || 4000;

// Define middleware here
app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    try {
        res.send(" Data deleted successfuly");
   
    } catch (error) {
        console.log(" error.message");
        return res.status(500);
    }
})

// Start the API server
app.listen (PORT, () =>{
    console.log(`API Server now listening on PORT ${PORT}!`)
})
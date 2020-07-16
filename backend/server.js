const express = require('express');
const app =express();

const PORT = process.env.PORT || 4000;

// Start the API server
app.listen (PORT, () =>{
    console.log(`API Server now listening on PORT ${PORT}!`)
})
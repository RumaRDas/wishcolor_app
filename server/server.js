const express = require('express');

const app = express();
const PORT = 4000;

app.get('/', (req, res) => res.json({hello: "world"}));

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status =404;
    next(err);
});
// middleware
app.use((err,req, res,next) =>{
    res.status(err.ststus || 500).json({
        err: err.message || 'Something went wrong'
    });
});
app.listen(PORT, console.log(`server started on port ${PORT}`));
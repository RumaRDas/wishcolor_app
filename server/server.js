const express = require('express');

const app = express();
const PORT = 4000;
app.get('/', (req, res) => res.json({hello: "world"}));
app.listen(PORT, console.log(`server started on port ${PORT}`));
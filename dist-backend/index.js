const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, '../dist')));
app.listen(4040, () => console.log('Listening on http://localhost:4040'));
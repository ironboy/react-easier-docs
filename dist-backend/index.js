const path = require('path');
const express = require('express');
const compression = require('compression');
const app = express();
app.use(compression);
app.use(express.static(path.join(__dirname, '../dist')));
app.listen(4040, () => console.log('Listening on http://localhost:4040'));
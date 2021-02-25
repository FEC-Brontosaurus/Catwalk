const express = require('express');

const morgan = require('morgan');

const path = require('path');

const PORT = 3000;

const app = express();

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.json());
app.use(morgan('combined'));
app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

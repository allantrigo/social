const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

require('../api/persons_api')(app);
require('../api/posts_api')(app);
require('../api/comments_api')(app);
require('../api/reactions_api')(app);

module.exports = app;
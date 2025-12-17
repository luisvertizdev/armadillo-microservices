const express = require('express');
const implementsRouter = require('./routes/implements.routes');

const app = express();

app.use(express.json());

app.use('/', implementsRouter);

// Healthcheck simple
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
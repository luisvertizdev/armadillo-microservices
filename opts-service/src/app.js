const express = require('express');
const optsRouter = require('./routes/opts.routes');

const app = express();

app.use(express.json());

app.use('/', optsRouter);

// Healthcheck simple
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
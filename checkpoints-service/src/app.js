const express = require('express');
const checkpointsRouter = require('./routes/checkpoints.routes');

const app = express();

app.use(express.json());

app.use('/', checkpointsRouter);

// Healthcheck simple
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
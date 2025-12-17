const express = require('express');
const workersRouter = require('./routes/workers.routes');

const app = express();

app.use(express.json());

app.use('/', workersRouter);

// Healthcheck simple
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
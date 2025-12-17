const express = require('express');
const incidentsRouter = require('./routes/incidents.routes');

const app = express();

app.use(express.json());

app.use('/', incidentsRouter);

// Healthcheck simple
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
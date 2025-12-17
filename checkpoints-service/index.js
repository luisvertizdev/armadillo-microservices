const app = require('./src/app');

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`checkpoints-service running in port ${PORT}`);
});
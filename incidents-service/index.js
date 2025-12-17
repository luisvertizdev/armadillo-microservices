const app = require('./src/app');

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
  console.log(`incidents-service running in pot ${PORT}`);
});
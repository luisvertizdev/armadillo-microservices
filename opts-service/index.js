const app = require('./src/app');

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`opts-service running in port ${PORT}`);
});
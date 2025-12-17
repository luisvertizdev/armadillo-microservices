const express = require('express');
const axios = require('axios');
const { createAuthMiddleware } = require('./middleware/auth');

const app = express();
app.use(express.json());

const authenticate = createAuthMiddleware('JWT_SECRET');

// helper genérico para proxear
function proxy(serviceBaseUrl, serviceName) {
  return async (req, res) => {
    try {
      // quitar el prefijo del path
      const path = req.url;
      console.log('Proxying to:', serviceBaseUrl + path);

      const r = await axios({
        url: serviceBaseUrl + path,
        method: req.method,
        data: req.body,
        headers: {
          Authorization: req.headers.authorization || ''
        }
      });
      res.status(r.status).json(r.data);
    } catch (e) {
      console.error(e.message);
      if (e.response) {
        res.status(e.response.status).json(e.response.data);
      } else {
        res
          .status(500)
          .json({ message: `Error en ${serviceName || 'servicio backend'}` });
      }
    }
  };
}


// (Opcional) auth-service si lo tienes
app.post('/auth/login', async (req, res) => {
  try {
    const r = await axios.post('http://localhost:3001/auth/login', req.body);
    res.status(r.status).json(r.data);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: 'Error in auth-service' });
  }
});

app.use('/implements', authenticate, proxy('http://implements-service:3003', 'implements-service'));
app.use('/checkpoints', authenticate, proxy('http://checkpoints-service:3002', 'checkpoints-service'));
app.use('/incidents', authenticate, proxy('http://incidents-service:3004', 'incidents-service'));
app.use('/opts', authenticate, proxy('http://opts-service:3005', 'opts-service'));
app.use('/workers', authenticate, proxy('http://workers-service:3006', 'workers-service'));

app.listen(3000, () => console.log('gateway running in port 3000'));
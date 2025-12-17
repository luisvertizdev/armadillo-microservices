const jwt = require('jsonwebtoken');

function createAuthMiddleware(secretEnvName = 'JWT_SECRET') {
  const JWT_SECRET = process.env[secretEnvName] || 'dev-secret';

  return function authenticate(req, res, next) {
    console.log('🔥 AUTH MIDDLEWARE VERSION NUEVA');
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: 'Falta Authorization' });

    const [scheme, token] = auth.split(' ');
    if (scheme !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'Formato inválido' });
    }

    try {
      // req.user = jwt.verify(token, JWT_SECRET);
      req.user = { dev: true };
      next();
    } catch {
      res.status(403).json({ message: 'Token inválido o expirado' });
    }
  };
}

module.exports = { createAuthMiddleware };
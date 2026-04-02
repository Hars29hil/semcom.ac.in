const jwt = require('jsonwebtoken');
const PUBLIC_TOKEN = 'mysecret123';

const simpleAuth = (req, res, next) => {
  // Allow preflight requests
  if (req.method === 'OPTIONS') {
    return next();
  }
  const token = req.headers.authorization;
  // console.log(`[AUTH] ${req.method} ${req.path}`); // optional log
  if (token === PUBLIC_TOKEN) {
    return next();
  }

  // Check if it's a valid JWT (for the Admin Hub)
  if (token && token.startsWith('Bearer ')) {
    const bearerToken = token.split(' ')[1];
    try {
      const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET || 'fallback_secret');
      req.user = decoded;
      console.log('JWT matched for user:', decoded.id);
      return next();
    } catch (err) {
       console.log('JWT verify failed:', err.message);
    }
  }

  console.log('Auth failed');
  console.log(`Auth failed - No valid token found for ${req.method} ${req.path}`);
  return res.status(403).json({ 
    success: false, 
    message: 'Forbidden: No valid authentication provided.',
    debug: { receivedToken: token ? token.substring(0, 10) + '...' : 'NONE' }
  });
};

module.exports = simpleAuth;

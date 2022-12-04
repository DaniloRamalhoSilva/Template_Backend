const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (id) => {
  const token = jwt.sign({ data: { userId: id } }, secret, jwtConfig);
  return token;
};

const verifyToken = (authorizatio) => {
  try {
    const payload = jwt.verify(authorizatio, secret);
    return payload;
  } catch (error) {
    return { isError: true, error };
  }
};

module.exports = {
  createToken,
  verifyToken,
};

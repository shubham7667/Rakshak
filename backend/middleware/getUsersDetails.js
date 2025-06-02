// middleware to fetch the users details 
const user = require('../model/user.js')
const jwt = require('jsonwebtoken')



const getUserData = async (req, res, next) => {
  try {
    const token = req.cookies.login_token;
    console.log('Token:', token);
    if (!token) {
      return res.status(400).json({ message: 'No Token Found For The Requested User.' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log('Decoded token:', decodedToken);
    const getUser = await user.findOne({ email: decodedToken });
    console.log('User found:', getUser);
    if (!getUser) {
      return res.status(400).json({ message: 'No User Found.' });
    }
    req.user = getUser;
    next();
  } catch (error) {
    console.error('JWT error:', error);
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = getUserData
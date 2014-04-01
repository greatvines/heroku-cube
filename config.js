module.exports = {
  "mongo-url": process.env.MONGODB_URI,
  "http-port": process.env.PORT,
  "authenticator": process.env.CUBE_AUTHENTICATOR,
  "consumer-secret": process.env.CONSUMER_SECRET,
  "valid-email": process.env.VALID_EMAIL_DOMAIN
};

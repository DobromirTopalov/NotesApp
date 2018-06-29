const config = (() => {
  const PORT = 4201;
  const JWT_SECRET = 'note_dev';
  const JWT_ISS = 'notes';
  const JWT_EXPIRE_TIME = 60 * 60 * 60; // in seconds

  return {
      PORT,
      JWT_SECRET,
      JWT_ISS,
      JWT_EXPIRE_TIME,
  };
})();

module.exports = {
  PORT: config.PORT,
  JWT_SECRET: config.JWT_SECRET,
  JWT_ISS: config.JWT_ISS,
  JWT_EXPIRE_TIME: config.JWT_EXPIRE_TIME,
};
module.exports = function log(message) {
  console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
};

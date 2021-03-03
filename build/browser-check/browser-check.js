const { redirectIfUnsupported } = require('./browser-support');

// Get User Agent (http://detectmobilebrowsers.com/)
const userAgent =
  window.navigator.userAgent || navigator.vendor || window.opera;

// Test browser and redirect if unsupported
redirectIfUnsupported(userAgent);

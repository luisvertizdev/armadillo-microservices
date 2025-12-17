const getOptsMock = require('../../mocks/get-opts.json');
const postSendSelfieMock = require('../../mocks/post-send-selfie.json');

function getOpts(_req, res) {
  res.json(getOptsMock);
}

function sendSelfie(_req, res) {
  res.json(postSendSelfieMock);
}

module.exports = {
  getOpts,
  sendSelfie
};
const getCheckpointTypesMock = require('../../mocks/get-checkpoint-types.json');
const postRegisterCheckpointMock = require('../../mocks/post-register-checkpoint.json');

function getCheckpointTypes(_req, res) {
  res.json(getCheckpointTypesMock);
}

function registerCheckpoint(_req, res) {
  res.json(postRegisterCheckpointMock);
}

module.exports = {
  getCheckpointTypes,
  registerCheckpoint,
};
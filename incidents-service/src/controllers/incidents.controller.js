const getIncidentTypesMock = require('../../mocks/get-incident-types.json');
const postSendIncidentMock = require('../../mocks/post-send-incident.json');

function getIncidentTypes(_req, res) {
  res.json(getIncidentTypesMock);
}

function sendIncident(_req, res) {
  res.json(postSendIncidentMock);
}

module.exports = {
  getIncidentTypes,
  sendIncident,
};
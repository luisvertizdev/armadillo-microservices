const getProgrammingMock = require('../../mocks/get-programming.json');
const getOptDetailMock = require('../../mocks/get-opt-detail.json');
const getRouteStop1Mock = require('../../mocks/get-route-stop-origin-departure-pending.json');
const postSendTollReceiptMock = require('../../mocks/post-send-toll-receipt.json');
const postSendImplementsMock = require('../../mocks/post-send-implements.json');


function getProgramming(_req, res) {
  res.json(getProgrammingMock);
}

function getOptDetail(_req, res) {
  res.json(getOptDetailMock);
}

function getRouteStop(_req, res) {
  res.json(getRouteStop1Mock);
}

function sendTollReceipt(_req, res) {
  res.json(postSendTollReceiptMock);
}

function sendImplements(_req, res) {
  res.json(postSendImplementsMock);
}

module.exports = {
  getProgramming,
  getOptDetail,
  getRouteStop,
  sendTollReceipt,
  sendImplements
};
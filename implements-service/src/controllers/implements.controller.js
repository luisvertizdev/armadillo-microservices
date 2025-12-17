const getImplementsMock = require('../../mocks/get-implements.json');
const getImplementsCategoriesMock = require('../../mocks/get-implements-categories.json');

function getImplements(_req, res) {
  res.json(getImplementsMock);
}

function getImplementsCategories(_req, res) {
  res.json(getImplementsCategoriesMock);
}

module.exports = {
  getImplements,
  getImplementsCategories,
};
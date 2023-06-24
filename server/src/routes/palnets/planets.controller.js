const palnets = require("../../models/planets.model");

function getAllPlanets(req, res) {
  return res.status(200).json(palnets);
}

module.exports = {
  getAllPlanets,
};

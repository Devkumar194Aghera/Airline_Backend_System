const { FlightService } = require("../services/index");
const { createAll } = require("./city-controller");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const data = req.body;
    const flight = await flightService.createFlight(data);
    return res.status(200).json({
      data: flight,
      success: true,
      message: "Successfully added the flight",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error while adding the flight",
      error: error,
    });
  }
};

module.exports = { create };

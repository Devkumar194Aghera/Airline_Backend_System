const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const data = req.body;
    const airport = await airportService.createAirport(data);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully created the airport",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error while creating the airport",
      error: error,
    });
  }
};

module.exports = { create };

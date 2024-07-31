const { FlightService } = require("../services/index");
const { createAll } = require("./city-controller");
const {
  ClientErrorCodes,
  ServerErrorCodes,
  SuccessCodes,
} = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const data = req.body;
    const flight = await flightService.createFlight(data);
    return res.status(SuccessCodes.CREADTED).json({
      data: flight,
      success: true,
      message: "Successfully added the flight",
      error: {},
    });
  } catch (error) {
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Error while adding the flight",
      error: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const flightId = req.params.id;
    const flight = await flightService.getFlight(flightId);
    return res.status(SuccessCodes.OK).json({
      data: flight,
      success: true,
      message: "Successfullt fetched the flight",
      error: {},
    });
  } catch (error) {
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Error while fetching the flight",
      error: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const data = req.query;
    const flight = await flightService.getAllFlight(data);
    return res.status(SuccessCodes.OK).json({
      data: flight,
      success: true,
      message: "Successfullt fetched the flight",
      error: {},
    });
  } catch (error) {
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Error while fetching the flight",
      error: error,
    });
  }
};

module.exports = { create, get, getAll };

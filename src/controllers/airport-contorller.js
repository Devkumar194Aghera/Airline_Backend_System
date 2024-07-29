const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const data = req.body;
    const airport = await airportService.CreateAirport(data);
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
// /city/airport/:id -> DELETE
const destroy = async (req, res) => {
  try {
    const data = req.params.id;
    const response = await airportService.DeleteAirport(data);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted an airport ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error occured while deleting an airport ",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const data = req.params.id;
    const airport = await airportService.SearchAirport(data);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully fetched the airport ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error occured while fetching the airport ",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const filter = req.query;
    const airport = await airportService.SearchAllAirports(filter);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully fetched all the airport ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error occured while fetching all airport ",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body;
    const airport = await airportService.UpdateAirport(id, name);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully update the airport ",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error occured while updating the airport ",
      err: error,
    });
  }
};

module.exports = { create, destroy, get, getAll, update };

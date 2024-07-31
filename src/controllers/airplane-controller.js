const { AirplaneService } = require("../services/index");

const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    data = req.body;
    const airplane = await airplaneService.createAirplane(data);
    return res.status(201).json({
      data: airplane,
      success: true,
      message: "Successfully  create the airplane",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error while creating the airplane",
      error: error,
    });
  }
};

const get = async (req, res) => {
  try {
    id = req.params.id;
    const airplane = await airplaneService.getAirplane(id);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Successfully fetch the airplane",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error while fetching the airplane",
      error: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    filter = req.params;
    const airplane = await airplaneService.getAllAirplane(filter);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Successfully fetch all airplane",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error while fetching all airplane",
      error: error,
    });
  }
};

const update = async (req, res) => {
  try {
    id = req.params;
    data = req.body;
    const airplane = await airplaneService.updateAirplane(id, data);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Successfully update the airplane",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error while updating the airplane",
      error: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    id = req.params;
    const airplane = await airplaneService.destroyAirplane(id);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Successfully delete the airplane",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error while deleting the airplane",
      error: error,
    });
  }
};

module.exports = { create, destroy, get, getAll, update };

const express = require("express");
const cityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-contorller");
const FlightController = require("../../controllers/flight-contollers");
const AirplaneContoller = require("../../controllers/airplane-controller");

const { ValidateFlightCreation } = require("../../middlewares/index");

const router = express.Router();

router.post("/airplane", AirplaneContoller.create);
router.get("/airplane/all", AirplaneContoller.getAll);
router.get("/airplane/:id", AirplaneContoller.get);
router.patch("/airplane/:id", AirplaneContoller.update);
router.delete("/airplane/:id", AirplaneContoller.destroy);

router.post(
  "/flights",
  ValidateFlightCreation.validateFlightCreation,
  FlightController.create
);
router.get("/flights/all", FlightController.getAll);
router.get("/flights/:id", FlightController.get);

router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport/:id", AirportController.get);
router.get("/allAirport", AirportController.getAll);
router.patch("/airport/:id", AirportController.update);

router.post("/city", cityController.create);
router.post("/city/all", cityController.createAll);
router.delete("/city/:id", cityController.destroy);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);
router.patch("/city/:id", cityController.update);


module.exports = router;

const express = require("express");
const cityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-contorller");
const FlightController = require("../../controllers/flight-contollers");
const router = express.Router();
router.post("/flights", FlightController.create);
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

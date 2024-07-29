const express = require("express");
const cityController = require("../../controllers/city-controller");
const AirportController = require("../../controllers/airport-contorller");
const router = express.Router();
router.post("/city/airport", AirportController.create);
router.delete("/city/airport/:id", AirportController.destroy);
router.get("/city/airport/:id", AirportController.get);
router.get("/city/allAirport", AirportController.getAll);
router.patch("/city/airport/:id", AirportController.update);

router.post("/city", cityController.create);
router.post("/city/all", cityController.createAll);
router.delete("/city/:id", cityController.destroy);
router.get("/city/:id", cityController.get);
router.get("/city", cityController.getAll);
router.patch("/city/:id", cityController.update);


module.exports = router;

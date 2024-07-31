const validateFlightCreation = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.depatureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.depatureTime ||
    !req.body.price
  ) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "Invalid request body for flight creation",
      error: "missing mendatory field for flight creation",
    });
  }
  next();
};

module.exports = { validateFlightCreation };

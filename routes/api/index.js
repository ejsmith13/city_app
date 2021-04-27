const router = require("express").Router();
const locationRoutes = require("./location");

// location routes
router.use("/locations", locationRoutes);

module.exports = router;
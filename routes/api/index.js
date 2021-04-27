const router = require("express").Router();
const locationRoutes = require("./locations");

// location routes
router.use("/locations", locationRoutes);

module.exports = router;
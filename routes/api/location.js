const router = require("express").Router();
const localController = require("../../controllers/localController");

// Matches with "/api/local"
router.route("/")
  .get(localController.findAll)
  .post(localController.create);

// Matches with "/api/local/:id"
router
  .route("/:id")
  .get(localController.findById)
  .put(localController.update)
  .delete(localController.remove);

module.exports = router;
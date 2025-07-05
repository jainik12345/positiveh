const router = require("express").Router();
const controller = require("../../controller/home/homeOurPortfolio.controller");

router.get("/", controller.getHomeOurPortfolio);
router.get("/trashed", controller.getTrashedHomeOurPortfolio);
router.get("/:id", controller.getHomeOurPortfolioId);
router.post("/", controller.insertHomeOurPortfolio);
router.put("/:id", controller.updateHomeOurPortfolio);
router.delete("/:id", controller.deleteHomeOurPortfolio);
router.patch("/restore/:id", controller.restoreHomeOurPortfolio);

module.exports = router;
const router = require('express').Router()
const homeController = require('../controllers/homeController')

// For rendering different pages
router.get("/", homeController.load);
router.post("/add-habit", homeController.add);
router.get("/delete-habit", homeController.delete);
router.get("/view-habit", homeController.viewhabit);
router.get("/find-habit", homeController.fetchhabit);
router.get("/update-db-date", homeController.updateDates);

module.exports = router;
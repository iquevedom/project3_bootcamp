const router = require("express").Router();
const adminRoutes = require("./admin.js");

// Book routes
router.use("/admin", adminRoutes);

module.exports = router;
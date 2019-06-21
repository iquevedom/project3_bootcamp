const router = require("express").Router();
const adminRoutes = require("./admin");

// Admin control routes
router.use("/admin", adminRoutes);

module.exports = router;
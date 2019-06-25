const router = require("express").Router();
const adminRoutes = require("./admin");
const visitorRoutes = require("./visitors");

// Admin control routes
router.use("/admin", adminRoutes);
router.use("/visitors", visitorRoutes);

module.exports = router;

const router = require("express").Router();

const db = require("../../models");

// ==============
// Order Controls
// ==============

// Find and return all ordered items
router.get("/orders/:id", (req, res) => {
  db.Orders
    .find({ owner: req.params.id })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Find and return all items ordered today
// Future implementation
// router.get("orders/:id/today", (req, res) => {
//   db.Orders
//     .find({ owner: req.params.id, date: Date.now })
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// });

// Find and return all items ordered on specific date
// router.get("/orders/:id/:date", (req, res) => {
//   db.Orders
//     .find({ owner: req.params.id, date: req.params.date })
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// });

// Post a new ordered item
router.post("/orders/:id", (req, res) => {
  db.Orders
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Get details on an ordered item
router.get("/orders/:id/:oId", (req, res) => {
  db.Orders
    .findOneAndUpdate({ _id: req.params.oId }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// Update an ordered item
router.put("/orders/:id/:oId", (req, res) => {
  db.Orders
    .findOneAndUpdate({ _id: req.params.oId }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// ====================
// Information Controls
// ====================

// Check visitor information
// Find by phone
router.get("/info/:phone", (req, res) => {
  // if there is no associated phone, an empty array will be returned
  db.Visitors
    .find({ phone: req.params.phone })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
});

// Create new visitor field
router.post("/info", (req, res) => {
  db.Visitors
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

// Update a visitor field
// Planned for future implemention
// router.put("/info", (req, res) => {
//   db.Visitors
//     .create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// })

// =============
// Menu Controls
// =============

// Find and return all menu items
router.get("/menu", (req, res) => {
  db.Menu
    .find()
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
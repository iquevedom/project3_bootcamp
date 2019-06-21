const router = require("express").Router();

const db = require("../../models");

// Find and return all ordered items
router.get("/orders", (req, res) => {
    db.Visitors
        .find(req, query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Find specific order
router.get("/orders/:index", (req, res) => {
    db.Visitors
        .find(req, query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Find most recent order
router.get("/orders/current", (req, res) => {
    db.Visitors
        .find(req, query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Check visitor information
router.get("/info", (req, res) => {
    //find by phone
    db.Visitors
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
});

// Create new visitor field
router.post("/info", (req, res) => {
    db.Visitors
    .create(req, query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
})

// Create new order item
router.post("/menu", (req, res) => {
    db.Visitors
        .create(req, query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;
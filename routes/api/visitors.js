const router = require("express").Router();

// Find and return all menu items
router.get("/menu", (req, res) => {
    db.Visitors
        .find(req, query)
        .sort({ _id: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Create new menu item
router.post("/menu", (req, res) => {
    db.Visitors
        .create(req, query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Check visitor information
router.post("/info", (req, res) => {
    //find by phone
    db.Visitors
        .findOneAndUpdate({ phone: req.params.phone }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)) ||
    //no existing entry create new field
        db.Visitors
            .create(req, query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
});

// find menu item
router.post("/menu", (req, res) => {
    db.Visitors
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;
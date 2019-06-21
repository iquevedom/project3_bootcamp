const router = require("express").Router();

// Import connection to database
const db = require("../../models/menuItem");

// Find and return all menu items
router.get("/menu-items", (req, res) => {
    db.Menu
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Create new menu item
router.post("/menu-items/new", (req, res) => {
    db.Menu
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Update menu item by ID
router.put("/menu-items/update/:id", (req, res) => {
    db.Menu
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Delete menu item
router.delete("/menu-items/delete/:id", (req, res) => {
    db.Menu
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;

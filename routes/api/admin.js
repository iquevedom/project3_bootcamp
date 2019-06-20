const router = require("express").Router();

// Find and return all menu items
router.get("/admin/menu", (req, res) => {
    db.Menu
        .find(req, query)
        .sort({ _id: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Create new menu item
router.post("/admin/menu/new", (req, res) => {
    db.Menu
        .create(req, query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Update menu item by ID
router.post("/admin/menu/update", (req, res) => {
    db.Menu
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Delete menu item
router.post("/admin/menu/delete", (req, res) => {
    db.Menu
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});


module.exports = router;

const espress = require("express");
const router = espress.Router();
const Person = require("../models/person.js");

//get list of project from db
router.get("/ninja", function(req, res, err) {
  //finde all
  Person.find({}).then(function(p) {
    res.send(p);
  });

  // Person.aggregate()
  //   .near({
  //     near: [parseFloat(req.query.ing), parseFloat(req.query.lat)],
  //     maxDistance: 100000,
  //     spherical: true,
  //     distanceField: "dist.calculated"
  //   })
  //   .then(function(p) {
  //     res.send(p);
  //   });
});

//add a new data to db
router.post("/ninja", function(req, res, err) {
  Person.create(req.body)
    .then(function(p) {
      res.send(p);
    })
    .catch(err);
});

//update a data in db
router.put("/ninja/:id", function(req, res, err) {
  Person.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Person.findOne({ _id: req.params.id }).then(function(p) {
      res.send(p);
    });
  });
});

//delete a data from db
router.delete("/ninja/:id", function(req, res, err) {
  Person.findByIdAndRemove({ _id: req.params.id }).then(function(p) {
    res.send(p);
  });
});

module.exports = router;

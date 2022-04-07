const db = require("../models");
const Timelog = db.timelogs;
const Op = db.Sequelize.Op;
// Create and Save a new Timelog
exports.create = (req, res, next) => {
    // Create a Timelog
    const timelog = {
        start: req.body.start,
        end: req.body.end,
        description: req.body.description,
    };
    // Save Timelog in the database
    Timelog.create(timelog)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "The creation of your Timelog was not successful."
            });
        });
};
// Retrieve all Timelogs from the database.
exports.findAll = (req, res, next) => {
    Timelog.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error happened trying to reach the Timelogs"
            });
        });
};
// Find a single Timelog with an id
exports.findOne = (req, res, next) => {
    res.status(500).send("Service no implemented");
};
// Update a Timelog by the id in the request
exports.update = (req, res, next) => {
    res.status(500).send("Service no implemented");
};
// Delete a Timelog with the specified id in the request
exports.delete = (req, res, next) => {
    res.status(500).send("Service no implemented");
};
// Delete all Timelogs from the database.
exports.deleteAll = (req, res, next) => {
    res.status(500).send("Service no implemented");
};

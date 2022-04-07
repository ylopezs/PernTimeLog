

const timelogs = require("../controllers/timelog.controller.js");
const express = require('express');
const router = express.Router();
router.use(express.json());

// Create a new Timelog
router.post("/", timelogs.create);
// Retrieve all Timelogs
router.get("/", timelogs.findAll);
// Retrieve a single Timelog with id
router.get("/:id", timelogs.findOne);
// Update a Timelog with id
router.put("/:id", timelogs.update);
// Delete a Timelog with id
router.delete("/:id", timelogs.delete);
// Create a new Timelog
router.delete("/", timelogs.deleteAll);

module.exports = router;

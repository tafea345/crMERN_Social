const express = require("express");
const router = express.Router();

// @route   GET api/auth
// @dec     Test route
// @access  Public
router.get("/", (req, res) => res.send("Auth route working......"));

module.exports = router;

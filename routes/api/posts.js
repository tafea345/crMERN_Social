const express = require("express");
const router = express.Router();

// @route   GET api/posts
// @dec     Test route
// @access  Public
router.get("/", (req, res) => res.send("Posts route working......"));

module.exports = router;

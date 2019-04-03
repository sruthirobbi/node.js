const express = require("express");
const router = express.Router();

//@route /api/posts/test
router.get("/test", (req, res) => res.json({ msg: "post router here" }));

module.exports = router;

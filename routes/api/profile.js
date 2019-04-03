const express = require("express");
const router = express.Router();

//@route /api/profile/test
router.get("/test", (req, res) => res.json({ msg: "Profile router here" }));

module.exports = router;

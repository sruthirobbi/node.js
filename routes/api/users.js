const express = require("express");
const router = express.Router();

//@route /api/users/test

router.get("/test", (req, res) => res.json({ msg: "Users router here" }));

module.exports = router;

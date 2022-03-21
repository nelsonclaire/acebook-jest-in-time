const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.post("/", PostsController.Create);
router.get("/new", PostsController.New);
router.post("/like/:id", PostsController.Like);
router.post("/comment/new", PostsController.Comment);

module.exports = router;

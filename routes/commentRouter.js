const { Router } = require('express');
const commentRouter = Router({ mergeParams: true });
const { Comment } = require('../models.js')
const { restrict } = require('../services/auth')

commentRouter.route('/')
  .get(async (req, res, next) => {
    try {
      const comments = await Comment.findAll();
      res.json(comments);
    } catch (e) {
      next(e)
    }
  })
  .post(restrict, async (req, res, next) => {
    try {
      console.log(req)
      const comment = await Comment.create({
        content: req.body.comment,
        blogId: req.params.blog_id,
        userId: res.locals.user.id
      })
      res.json(comment);
    }
    catch (e) {
      next(e)
    }
  })

commentRouter.route('/:id')
  .put(async (req, res, next) => {
    try {
      const comment = await Comment.findByPk(req.params.id);
      await comment.update(req.body)
      res.json(comment)
    } catch (e) {
      next(e)
    }
  })
  .delete(async (req, res, next) => {
    try {
      const comment = await Comment.destroy({ where: { id: req.params.id } })
      res.json(comment)
    } catch (e) {
      next(e)
    }
  })

module.exports = commentRouter;
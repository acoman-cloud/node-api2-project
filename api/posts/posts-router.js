// implement your posts router here
const express = require('express')
const router = express.Router()
const Post = require('./posts-model.js')

router.get('/api/posts/', (req, res) => {
  Post.find(req.query)
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: 'The posts information could not be retrieved',
      })
    })
})

router.get('/api/posts/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(posts => {
      if (posts) {
        res.status(200).json(Post)
      } else {
        res.status(404).json({ message: 'The post with the specified ID does not exist' })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: 'The post information could not be retrieved',
      })
    })
})

router.post('/api/posts/', (req, res) => {
  Post.insert(req.body)
    .then(posts => {
      res.status(201).json(posts)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: 'The post could not be created',
      })
    })
})

router.delete('/api/posts/:id', (req, res) => {
  Post.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The post has been nuked' })
      } else {
        res.status(404).json({ message: 'The adopter could not be found' })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: 'Error removing the adopter',
      })
    })
})

router.put('/api/posts/:id', (req, res) => {
  const changes = req.body
  Post.update(req.params.id, changes)
    .then(adopter => {
      if (adopter) {
        res.status(200).json(adopter)
      } else {
        res.status(404).json({ message: 'The post with the specified ID does not exist' })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: 'The post information could not be modified',
      })
    })
})

router.get('/api/posts/:id/comments', (req, res) => {
  Post.find(req.query)
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: 'The posts information could not be retrieved',
      })
    })
})

module.exports = router

const blogController = require('../Controllers/blogControllers')

const express = require('express')
const router = express.Router()

router.get('/', blogController.blog_index)
router.post('/', blogController.blog_create)
router.get('/:id', blogController.blog_single_item)
router.delete('/:id', blogController.blog_delete)

module.exports = router
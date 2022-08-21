const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought, 
  deleteThought, 
  addReaction, 
  deleteReaction
} = require('../../controllers/ThoughtsController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router.route('/:thoughtId').get(getSingleThought);



// get route for specific Thought, using id
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);


// return reactions associated with thoughts
router.route('/thoughtId/reactions').post(addReaction);


// once a reaction is created with an associated reaction id, delete the reaction by id
router.route('/:thoughtId/reactions/:reactionId').post(addReaction).delete(deleteReaction);


module.exports = router; 
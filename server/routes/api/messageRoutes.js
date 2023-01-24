const router = require('express').Router();
const {
  getSingleMessage,
  getMessages,
  createMessage,
} = require('../../controllers/messageControllers');

router.route('/').get(getMessages);

router.route('/').post(createMessage);

router.route('/:messageId').get(getSingleMessage);

module.exports = router;
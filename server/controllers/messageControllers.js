const { Message } = require("../models");

module.exports = {
  createMessage(req, res) {
    Message.create(req.body)
      .then((message) => res.json(message))
      .catch((err) => res.status(500).json(err));
  },

  getMessages(req, res) {
    Message.find()
      .then((messages) => res.json(messages))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },

  getSingleMessage(req, res) {
    Message.findOne({ _id: req.params.messageId }).then((message) =>
      !message
        ? res.status(404).json({ message: "No message with that ID " })
        : res.json(message)
    );
  },
};

const { Op } = require("sequelize");
const Sequelize = require("sequelize")
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {
  userIds: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false
  }
});

// find conversation given two user Ids

Conversation.findConversation = async function (senderId, recipientId) {
  const conversation = await Conversation.findOne({
    where: {
      userIds: {
        [Op.overlap]: [senderId, recipientId]
      }
    }
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

module.exports = Conversation;

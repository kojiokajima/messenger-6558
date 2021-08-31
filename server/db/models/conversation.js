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

// find conversation given user Ids
Conversation.findConversation = async function (senderId, recipientIds) {
  const conversation = await Conversation.findOne({
    where: {
      userIds: {
        [Op.and]: {
          [Op.contains]: [senderId, [...recipientIds]],
          [Op.contained]: [senderId, [...recipientIds]],
        }
      }
    }
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

module.exports = Conversation;

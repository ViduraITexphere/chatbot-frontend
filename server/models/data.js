const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
});

const ChatModel = mongoose.model("datas", dataSchema);
module.exports = ChatModel;

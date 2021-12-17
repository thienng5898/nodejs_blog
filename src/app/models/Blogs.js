const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Blog = new Schema({
  name: { type: String, default: 'hahaha', maxlength: 25 },
  author: { type: String, default: 'thisauthor', maxlength: 25 },
  content: { type: String, default: 'thiscontent', maxlength: 600 },
  description: { type: String, default: 'thisdes', maxlength: 25 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', Blog);

const Blog = require('../models/Blogs');

class SiteControllers {
  index(req, res) {
    Blog.find({}, function (err, blogs) {
      if (!err) {
        res.json(blogs);
        return;
      }
      res.status(400).json({ error: 'error' });
    });
    // res.render('home');
  }

  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteControllers();

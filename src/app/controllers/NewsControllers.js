class NewsControllers {

    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.send('Show')
    }

}

module.exports = new NewsControllers
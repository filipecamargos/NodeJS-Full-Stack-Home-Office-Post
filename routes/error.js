//Handle the 404 page
exports.get404 = (req, res, next) => {
    res.render('pages/404', {
        title: '404 - Page Not Found'
    })
};

//Handle the 500 Page
exports.error500 = (error, req, res, next) => {
    res.status(500).render('500', {
        path: 'pages/500',
        isAuthenticated: req.session.isLoggedIn
    });
};
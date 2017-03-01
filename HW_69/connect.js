const connect = require('connect'),
    app = connect(),
    fileServer = require('./fileServer');

app.use((req, res, next) => {
    res.write('HELLO WORLD\n');
    next();
});

app.use('/', fileServer);

app.use((req, res) => {
    if (req.url === '/') {
        res.end();
    } else {
        res.statusCode = 404;
        res.end('404. Sorry we cant find that page');
    }
});

app.listen(80);
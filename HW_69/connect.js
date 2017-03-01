const connect = require('connect'),
    app = connect(),
    fileServer = require('./fileServer');

app.use((req, res, next) => {
    res.write('HELLO WORLD\n');
    next();
});

app.use('/', fileServer);
app.listen(80);
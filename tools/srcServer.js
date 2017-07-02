import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';
import httpProxy from 'http-proxy';


/* eslint-disable no-console */


const app = express();
const compiler = webpack(config);
const port = process.env.PORT || 8080;

app.set('port', (port));
// app.use(express.static('../public'));

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    stats: { colors: true },
    hot:true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


const targetUrl = 'http://localhost:8001/api';

const proxy = httpProxy.createProxyServer({
    target: targetUrl,
    ws: true
});

// Proxy to API server
app.use('/api', (req, res) => {
    proxy.web(req, res, { target: targetUrl });
});


app.get('/', function (req, res) {
    // res.sendFile(path.join( __dirname, '../src/index.html'));
    res.sendFile(path.join(config.output.publicPath, './index.html'));
});

app.listen(app.get('port'), function (err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});

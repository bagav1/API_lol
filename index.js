const request = require('request');
const express = require("express");
const cors = require('cors');
const env = require('./environment');
const app = express();

app.use(cors({ origin: env.FRONT_URL }));

app.get('/version_lol', function (req, res) {
    request(
        env.version_lol,
        { json: true },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/entire_league', function (req, res) {
    request(
        env.entire_league + req.query.q + '/' + req.query.t + '/' + req.query.d + '?page=1',
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token,
                'Content-Type': 'text/plain'
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/summoner_league', function (req, res) {
    request(
        env.summoner_league + req.query.id,
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token,
                'Content-Type': 'text/plain'
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/summoner_data/:name', function (req, res) {
    request(
        env.summoner_data + req.params.name,
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token,
                'Content-Type': 'text/plain'
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/summoner_data_id/:id', function (req, res) {
    request(
        env.summoner_data_id + req.params.id,
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token,
                'Content-Type': 'text/plain'
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/match_list/:p/:c', function (req, res) {
    if(!req.query.q && !req.query.t){
        var link = env.match_list + req.params.p + '/ids?count=' + req.params.c;
    }else if(req.query.q && !req.query.t){
        var link = env.match_list + req.params.p + '/ids?queue=' + req.query.q + '&count=' + req.params.c;
    }else if(!req.query.q && req.query.t){
        var link = env.match_list + req.params.p + '/ids?type=' + req.query.t + '&count=' + req.params.c;
    }else{
        var link = env.match_list + req.params.p + '/ids?queue=' + req.query.q + '&type=' + req.query.t + '&count=' + req.params.c;
    };
    request(
        link,
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token,
                'Content-Type': 'text/plain'
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/match/:id', function (req, res) {
    request(
        env.match + req.params.id,
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token,
                'Content-Type': 'text/plain'
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/match_timeline/:id', function (req, res) {
    request(
        env.match_timeline + req.params.id + '/timeline',
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token,
                'Content-Type': 'text/plain'
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/rotation_champ', function (req, res) {
    request(
        env.rotation_champ,
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token,
                'Content-Type': 'text/plain'
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/all_champs', function (req, res) {
    request(
        env.all_champs,
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token,
                'Content-Type': 'text/plain'
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/champ/:name', function (req, res) {
    request(
        env.champ + req.params.name + '.json',
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/items', function (req, res) {
    request(
        env.items,
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token,
                'Content-Type': 'text/plain'
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/summoner_spell', function (req, res) {
    request(
        env.summoner_spell,
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token,
                'Content-Type': 'text/plain'
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/profile_icon', function (req, res) {
    request(
        env.profile_icon,
        {
            json: true,
            headers: {
                'X-Riot-Token': env.riot_token,
                'Content-Type': 'text/plain'
            }
        },
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.listen(env.PORT, () => {
    console.log(`El servidor está inicializado en el host http://localhost:${env.PORT}`);
});
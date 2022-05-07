const request = require('request');
const express = require("express");
const cors = require('cors');
const env = require('./environment');
const app = express();

app.use(cors({ origin: env.FRONT_URL }));

const header = {
    json: true,
    headers: {
        'X-Riot-Token': env.riot_token,
        'Content-Type': 'text/plain'
    }
};

const fromDb = undefined;

let items;
let champions;
let summoner_spells = fromDb || {};
let runes_perks;

// Get all items
request(
    env.items,
    header,
    (error, response, body) => {
        if (error) {
            console.log(error);
        } else {
            items = body;
        }
    }
);

// Get all champions
request(
    env.all_champs,
    header,
    (error, response, body) => {
        if (error) {
            console.log(error);
        } else {
            champions = body;
        }
    }
);

// Get all summoner spells
request(
    env.summoner_spell,
    header,
    (error, response, body) => {
        if (error) {
            console.log(error);
        } else {
            for (const spell in body.data){
                // console.log(body.data[spell].key.toString());
                summoner_spells[body.data[spell].key] = body.data[spell];
            };
        }
    }
);

// Get all runes perks
request(
    env.runes_perk,
    header,
    (error, response, body) => {
        if (error) {
            console.log(error);
        } else {
            runes_perks = body;
        }
    }
);

app.get('/version_lol', function (req, res) {
    request(
        env.version_lol,
        header,
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
        header,
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
        header,
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/summoner_data/:name/:count', function (req, res) {
    var summoner = {};

    // consulta de informacion del summoner
    request(
        env.summoner_data + req.params.name,
        header,
        (err, resp, bodySummoner) => {
            if (err) {
                return res.send(err);
            }
            summoner = bodySummoner;

            // consulta de informacion de los ultimos matchs
            request(
                env.match_list + summoner.puuid + '/ids?count=' + req.params.count,
                header,
                (err, resp, bodyMatchs) => {
                    if (err) {
                        return res.send(err);
                    }
                    summoner.matchs = bodyMatchs;
                    summoner.profileIcon = env.img_profile_icon + summoner.profileIconId + '.png';
                    return res.send(summoner);
                }
            );
        }
    );
});

app.get('/summoner_data_id/:id', function (req, res) {
    request(
        env.summoner_data_id + req.params.id,
        header,
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/match_list/:p/:c', function (req, res) {
    if (!req.query.q && !req.query.t) {
        var link = env.match_list + req.params.p + '/ids?count=' + req.params.c;
    } else if (req.query.q && !req.query.t) {
        var link = env.match_list + req.params.p + '/ids?queue=' + req.query.q + '&count=' + req.params.c;
    } else if (!req.query.q && req.query.t) {
        var link = env.match_list + req.params.p + '/ids?type=' + req.query.t + '&count=' + req.params.c;
    } else {
        var link = env.match_list + req.params.p + '/ids?queue=' + req.query.q + '&type=' + req.query.t + '&count=' + req.params.c;
    };
    request(
        link,
        header,
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

app.get('/match/:id', function (req, res) {
    match = {
        info: {},
        team1: {
            info: {},
            participants: []
        },
        team2: {
            info: {},
            participants: []
        }
    };

    request(
        env.match + req.params.id,
        header,
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            match.info = body.info;

            ///Recopilacion de informacion de los participantes
            body.info.participants.forEach(summoner => {
                summoner.item0 = items.data[summoner.item0];
                summoner.item1 = items.data[summoner.item1];
                summoner.item2 = items.data[summoner.item2];
                summoner.item3 = items.data[summoner.item3];
                summoner.item4 = items.data[summoner.item4];
                summoner.item5 = items.data[summoner.item5];
                summoner.item6 = items.data[summoner.item6];
                
                summoner.summoner1Info = summoner_spells[summoner.summoner1Id];
                summoner.summoner2Info = summoner_spells[summoner.summoner2Id];

                if (summoner.challenges.highestChampionDamage === 1) {
                    match.info.highestChampionDamage = summoner.totalDamageDealtToChampions;
                };

                runes_perks.forEach(legend_rune => {
                    if (legend_rune.id === summoner.perks.styles[0].style) {
                        summoner.perks.styles[0].selections.forEach(rune => {
                            legend_rune.slots.forEach(slot => {
                                slot.runes.forEach(rune_slot => {
                                    if (rune_slot.id === rune.perk) {
                                        rune.perkInfo = rune_slot;
                                    };
                                });
                            });
                        })
                    }
                    if (legend_rune.id === summoner.perks.styles[1].style) {
                        summoner.perks.styles[1].selections.forEach(rune => {
                            legend_rune.slots.forEach(slot => {
                                slot.runes.forEach(rune_slot => {
                                    if (rune_slot.id === rune.perk) {
                                        rune.perkInfo = rune_slot;
                                    };
                                });
                            });
                        })
                    };
                });
                if (summoner.teamId === 100) {
                    this.match.team1.participants.push(summoner);
                } else if (summoner.teamId === 200) {
                    this.match.team2.participants.push(summoner);
                };
            });

            ///Recopilacion de informacion de los equipos
            body.info.teams.forEach(team => {
                if (team.teamId === 100) {
                    this.match.team1.info = team;
                } else if (team.teamId === 200) {
                    this.match.team2.info = team;
                };
            });

            delete match.info.participants;
            delete match.info.teams;

            return res.send(match);
        }
    );
});

app.get('/match_timeline/:id', function (req, res) {
    request(
        env.match_timeline + req.params.id + '/timeline',
        header,
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
        header,
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
        header,
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
        header,
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
        header,
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
        header,
        (err, resp, body) => {
            if (err) {
                return res.send(err);
            }
            return res.send(body);
        }
    );
});

// ----------------------------------------------------------------

app.listen(env.PORT, () => {
    console.log(`El servidor está inicializado en el host http://localhost:${env.PORT}`);
});
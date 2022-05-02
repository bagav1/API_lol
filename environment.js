const actual_version = '12.8.1';

const env = {
    FRONT_URL: 'http://localhost:4200',
    PORT: 3000,

    riot_token:`RGAPI-918c7a66-79fa-4547-9f01-39a688ac7ea0`,

    version_lol:'https://ddragon.leagueoflegends.com/api/versions.json',
    queue:`https://static.developer.riotgames.com/docs/lol/queues.json`,
    summoner_data: `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/`,
    match_list:`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/`, // & -> /ids,
    match_id:`https://americas.api.riotgames.com/lol/match/v5/matches/`,
    rotation_champ:`https://la1.api.riotgames.com/lol/platform/v3/champion-rotations`,
    all_champs: `http://ddragon.leagueoflegends.com/cdn/${actual_version}/data/es_MX/champion.json`,
    champ: `http://ddragon.leagueoflegends.com/cdn/${actual_version}/data/es_MX/champion/`,
    items:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/data/es_MX/item.json`,
    summoner_spell:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/data/es_MX/summoner.json`,
    profile_icon:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/data/es_MX/profileicon.json`,
}
module.exports = env;
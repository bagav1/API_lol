const actual_version = '12.8.1';

const env = {
    FRONT_URL: 'http://localhost:4200',
    PORT: 3000,

    riot_token:`RGAPI-0a9181f9-2178-4698-9246-b1a16b4eefcc`,

    version_lol:'https://ddragon.leagueoflegends.com/api/versions.json',
    summoner_data: `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/`,
    summoner_data_id: `https://la1.api.riotgames.com/lol/summoner/v4/summoners/`,
    summoner_league: `https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/`,
    entire_league: `https://la1.api.riotgames.com/lol/league/v4/entries/`, // & -> ?page=1
    match_list:`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/`, // & -> /ids,
    match:`https://americas.api.riotgames.com/lol/match/v5/matches/`,
    match_timeline:`https://americas.api.riotgames.com/lol/match/v5/matches/`,
    rotation_champ:`https://la1.api.riotgames.com/lol/platform/v3/champion-rotations`,
    all_champs: `http://ddragon.leagueoflegends.com/cdn/${actual_version}/data/es_MX/champion.json`,
    champ: `http://ddragon.leagueoflegends.com/cdn/${actual_version}/data/es_MX/champion/`,
    items:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/data/es_MX/item.json`,
    summoner_spell:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/data/es_MX/summoner.json`,
    profile_icon:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/data/es_MX/profileicon.json`
}
module.exports = env;
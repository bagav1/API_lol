const actual_version = '12.8.1';

const env = {
    FRONT_URL: 'http://localhost:4200',
    PORT: 3000,

    riot_token:`RGAPI-991867d0-7892-4f17-9c1e-052807377016`,

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
    runes_perk:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/data/es_MX/runesReforged.json`,
    profile_icon:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/data/es_MX/profileicon.json`,
//---------------------------------------------------------------------------------------------------------------------
    img_splash:`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/`,
    img_loading:`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/`,
    img_champ:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/img/champion/`,
    img_passive:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/img/passive/`,
    img_spell:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/img/spell/`,
    img_item:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/img/item/`,
    img_summoner_spell:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/img/spell/`,
    img_profile_icon:`http://ddragon.leagueoflegends.com/cdn/${actual_version}/img/profileicon/`,
}
module.exports = env;
export const GET_STEAM_DATA = "GET_STEAM_DATA";

export const getSteamData = (data) => ({
    type: GET_STEAM_DATA,
    payload: data,
});

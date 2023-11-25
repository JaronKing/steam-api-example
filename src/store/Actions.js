export const GET_STEAM_DATA = "GET_STEAM_DATA";
export const SET_STEAM = "SET_STEAM";

export const getSteamData = (data) => ({
    type: GET_STEAM_DATA,
    payload: data,
});

export const setSteam = (data) => ({
    type: SET_STEAM,
    payload: data,
});

import axios from 'axios';

export const fetchUserIdApi = (username) => {
    return axios.post(".netlify/functions/getSteamId/", { username: username });
};

export const fetchUserProfile = (userId) => {
    return axios.post(".netlify/functions/getUserProfile/", { userId: userId });
}

export const fetchGameLibrary = (userId) => {
    return axios.post(".netlify/functions/getUserGames/", { userId: userId });
}

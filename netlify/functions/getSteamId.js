const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.STEAM_API_KEY;

export const handler = async (event, context) => {
    try {
        const eventBody = JSON.parse(event.body);
        const response = await axios.get(
            `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${apiKey}&vanityurl=${eventBody.username}&format=json`
        );
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: response.data.response,
            }),
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: error,
            }),
        }
    }
}

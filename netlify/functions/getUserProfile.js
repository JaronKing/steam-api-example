const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.STEAM_API_KEY;

export const handler = async (event, context) => {
    try {
        const eventBody = JSON.parse(event.body);
        const response = await axios.get(
            `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${eventBody.userId}&format=json`
        );
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: response.data.response.players[0],
            }),
        }
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 200,
            body: JSON.stringify({
                error: error.message,
            }),
        }
    }
}

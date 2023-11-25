const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.STEAM_API_KEY;

export const handler = async (event, context) => {
    try {
        const eventBody = JSON.parse(event.body);
        const response = await axios.get(
            `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${eventBody.userId}&format=json&include_appinfo=1`
        );
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: response.data.response,
            }),
        }
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 200,
            body: JSON.stringify({
                error: error,
            }),
        }
    }
}

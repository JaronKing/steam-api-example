import { takeLatest, delay, put, call } from 'redux-saga/effects';

import {
    GET_STEAM_DATA,
    setSteam,
} from './../store/Actions';

import {
    fetchUserIdApi,
    fetchUserProfile,
    fetchGameLibrary,
} from './../api/Api';

function* getSteamData(payload) {
    yield put(setSteam({
        index: "retrieveUsernameState",
        value: "init",
    }));
    yield put(setSteam({
        index: "retrieveProfileState",
        value: "init",
    }));
    yield put(setSteam({
        index: "retrieveLibraryState",
        value: "init",
    }));
    yield put(setSteam({
        index: "calculateCountState",
        value: "init",
    }));
    yield delay(500);
    try {
        yield put(setSteam({
            index: "retrieveUsernameState",
            value: "loading",
        }));
        const steamUserIdResponse = yield call (fetchUserIdApi, payload.payload);
        const steamUserId = steamUserIdResponse.data.data.steamid;
        yield put(setSteam({
            index: "retrieveUsernameState",
            value: "complete",
        }));

        yield put(setSteam({
            index: "retrieveProfileState",
            value: "loading",
        }));
        const steamUserProfileResponse = yield call (fetchUserProfile, steamUserId);
        yield put(setSteam({
            index: "UserProfile",
            value: steamUserProfileResponse.data.data,
        }));
        yield put(setSteam({
            index: "retrieveProfileState",
            value: "complete",
        }));

        yield put(setSteam({
            index: "retrieveLibraryState",
            value: "loading",
        }));
        const steamUserLibraryResponse = yield call (fetchGameLibrary, steamUserId);
        const steamUserLibrary = steamUserLibraryResponse.data.data;
        yield put(setSteam({
            index: "steamUserLibrary",
            value: steamUserLibrary,
        }));
        yield put(setSteam({
            index: "retrieveLibraryState",
            value: "complete",
        }));

        yield put(setSteam({
            index: "calculateCountState",
            value: "loading",
        }));
        console.log(steamUserLibrary["games"]);
        let gameCountOver100 = 0;
        steamUserLibrary["games"].map((game) => {
            console.log(game);
            let hoursPlayed = game["playtime_forever"] / 60;
            if (hoursPlayed >= 100) gameCountOver100 += 1;
            return true;
        });
        yield put(setSteam({
            index: "gameCountOver100",
            value: gameCountOver100,
        }));
        yield put(setSteam({
            index: "calculateCountState",
            value: "complete",
        }));
    } catch (error) {
        console.log(error);
        yield put(setSteam({
            index: "error",
            value: true,
        }));
    }

}

function* dataSaga() {
    yield takeLatest(GET_STEAM_DATA, getSteamData);
}

export default dataSaga;

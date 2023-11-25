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
            index: "retrieveLibraryState",
            value: "complete",
        }));

    } catch (error) {
        yield delay(500);
            yield put(setSteam({
            index: "error",
            value: true,
        }));
    }




    yield delay(500);
    yield put(setSteam({
        index: "calculateCountState",
        value: "loading",
    }));

    yield delay(500);
        yield put(setSteam({
        index: "calculateCountState",
        value: "complete",
    }));
}

function* dataSaga() {
    yield takeLatest(GET_STEAM_DATA, getSteamData);
}

export default dataSaga;

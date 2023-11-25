import { takeLatest, delay, put } from 'redux-saga/effects';

import {
    GET_STEAM_DATA,
    setSteam,
} from './../store/Actions';

import {

} from './../api/Api';

function* getSteamData(payload) {
    yield delay(500);
    yield put(setSteam({
        index: "retrieveUsernameState",
        value: "loading",
    }));

    yield delay(500);
        yield put(setSteam({
        index: "retrieveUsernameState",
        value: "complete",
    }));

    yield delay(500);
        yield put(setSteam({
        index: "retrieveProfileState",
        value: "loading",
    }));

    yield delay(500);
        yield put(setSteam({
        index: "retrieveProfileState",
        value: "complete",
    }));

    yield delay(500);
        yield put(setSteam({
        index: "retrieveLibraryState",
        value: "loading",
    }));

    yield delay(500);
        yield put(setSteam({
        index: "retrieveLibraryState",
        value: "complete",
    }));

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

import React, { useState } from "react";
import { connect } from "react-redux";

import {
    getSteamData,
} from "./store/Actions";

function App({
    state,
    retrieveUsernameState,
    retrieveProfileState,
    retrieveLibraryState,
    calculateCountState,
    gameCountOver100,
    doGetSteamData,
}) {
    const [ username, setUsername ] = useState("MrBlinko");
    const handleChange = (event) => {
        setUsername(event.target.value);
    };
    const handleSubmit = () => {
        if (username === "") return;
        doGetSteamData(username);
    }
    return (
        <div className="bg-teal-100 min-h-screen pt-24">
            <div className="max-w-xl m-auto bg-green-300 text-center p-4 rounded-3xl">
                <span className="text-4xl font-bold">
                    Count Games Over 100 Hours
                </span>
                <input type="text"
                    onChange={handleChange}
                    value={username}
                    placeholder="Enter Your Steam Username"
                    className="placeholder:italic placeholder:text-slate-400 block
                    w-auto border-2 border-slate-300 rounded-md py-2 my-5
                    justify-self-center text-center m-auto"
                />
                <button className="bg-blue-500 mt-4 p-4 rounded-3xl hover:bg-blue-600"
                    onClick={handleSubmit}>
                    Calculate Game Library
                </button>
            </div>
            <div className="max-w-lg m-auto text-center bg-gray-300">
                <div className="grid grid-cols-4 gap-2 p-2">
                    <div>
                        Retrieve Username
                        { retrieveUsernameState === "loading" &&
                            <div className="bg-yellow-100">loading...</div>
                        }
                        { retrieveUsernameState === "complete" &&
                            <div className="bg-green-200">complete</div>
                        }
                    </div>
                    <div>
                        Retrieve User Profile
                        { retrieveProfileState === "loading" &&
                            <div className="bg-yellow-100">loading...</div>
                        }
                        { retrieveProfileState === "complete" &&
                            <div className="bg-green-200">complete</div>
                        }
                    </div>
                    <div>
                        Retrieve Game Library
                        { retrieveLibraryState === "loading" &&
                            <div className="bg-yellow-100">loading...</div>
                        }
                        { retrieveLibraryState === "complete" &&
                            <div className="bg-green-200">complete</div>
                        }
                    </div>
                    <div>
                        Calculate Game Count
                        { calculateCountState === "loading" &&
                            <div className="bg-yellow-100">loading...</div>
                        }
                        { calculateCountState === "complete" &&
                            <div className="bg-green-200">complete</div>
                        }
                    </div>
                </div>
            </div>
            { calculateCountState === "complete" &&
                <div className="max-w-lg m-auto text-center bg-gray-200 p-4 rounded-b-3xl">
                    <span>
                        { gameCountOver100 } games with over 100 hours played on steam.<br/>
                        Time to get a new hobby
                    </span>
                </div>
            }
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    doGetSteamData: (username) => dispatch(getSteamData(username)),
});

const mapStateToProps = (state) => ({
    state: state,
    retrieveUsernameState: state.retrieveUsernameState,
    retrieveProfileState: state.retrieveProfileState,
    retrieveLibraryState: state.retrieveLibraryState,
    calculateCountState: state.calculateCountState,
    gameCountOver100: state.gameCountOver100,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

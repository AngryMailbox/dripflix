// Core
import React, { useState, useEffect } from "react";
import { createSlice, configureStore } from '@reduxjs/toolkit'
import searchQueryReducer from "./slices/searchQuerySlice";
import searchPageReducer from "./slices/searchPageSlice";
import searchReducer from "./slices/searchSlice"
import contentReducer from './slices/contentSlice';
import contentTypeReducer from './slices/contentTypeSlice'

const { trending, popular, search, image, get } = require("./api");

// //
// To remove

const getTrending = async function () {
    let data = await trending();
    return data.results;
};

const getPopular = async function (p = "1") {
    let data = await popular(p);
    return data.results;
};

//
// //

export const searchMovie = async function (query, p = "1") {
    let data = await search(query);
    return data.results;
};


export async function getContent(type, p = "1") {

    let data = {};
    let results = [];

    switch (type) {
        case "trending":
            data = await trending();
            results = rewriteId(data.results);
            console.log(results);
            return results;
        case "popular":
            data = await popular(p);
            results = rewriteId(data.results);
            return results;
    };
};

async function rewriteId(results) {
    for (let i = 0; i < results.length; i++) {
        results[i]["movieId"] = results[i]["id"];
        results[i]["id"] = i;

        results[i]["img"] = await image(results[i]["poster_path"]);
    }
    return results;
}


export function fetch() {
    const data = useState([]);
    const [type, setType] = useState("trending");

    useEffect(() => {
        getContent("trending").then(content => data(content))
    }, [type]);

    return data;
}















// let trend = new Promise(getTrending());
// let trendL = [];
// //trend = getTrending();//.then((result) => { trendL = result });
// trend.then((r) => { trendL = r });
// //trendL = trend.resolve();
// console.log(trendL);


export const contentSlice = createSlice(
    {
        name: "content",
        initialState: {
            value: []
        },
        reducers: {
            change: (state, string) => {
                state.value = getContent("trending");
            }
        }
    }
);

export const { change, erase } = contentSlice.actions;

export const selectContent = (state, i = 6) => state.content.slice(0, i);
















export const searchStore = configureStore(
    {
        reducer: {
            searchQuery: searchQueryReducer,
            searchPage: searchQueryReducer,
            search: searchReducer,
        }
    }
);

export const contentStore = configureStore(
    {
        reducer: {
            content: contentSlice.reducer,
            contentType: contentTypeReducer,
        }
    }
);



// export const updateTrending = async function () {
//     array = await trending();
// }

export async function updateTrending() {


};

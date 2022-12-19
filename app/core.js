// Core
//
// import api
const { trending, popular, search, image, get } = require("./api");

// //
// To remove

// const getTrending = async function () {
//     let data = await trending();
//     return data.results;
// };

// const getPopular = async function (p = "1") {
//     let data = await popular(p);
//     return data.results;
// };

//
// //

export const searchMovie = async function (query, p = "1") {

    // Function searchMovie() takes a query and optional parameter to find movies

    let data = await search(query, p);
    let results = await rewriteId(data.results);
    return results;
};


export async function getContent(type, p = "1") {

    // Function getContent() takes a type of content to fetch and an optional parameter

    let data = {};
    let results = [];

    switch (type) {
        case "trending":
            data = await trending();
            results = await rewriteId(data.results);
            return results;
        case "popular":
            data = await popular(p);
            results = await rewriteId(data.results);
            return results;
        case "info":
            // The default parameter value cannot be used
            if (p == "1") return;
            data = await get(p);
            return results;
    };
};

async function rewriteId(results) {

    // Function rewriteId() takes an array of movie objects and converts their id: to index values to be compatible
    // with iterating React components
    // The old value is saved as movieId to be used for finding the movie object remotely

    for (let i = 0; i < results.length; i++) {
        results[i]["movieId"] = results[i]["id"];
        results[i]["id"] = i;

        // Complete the url from poster_path and save to img key
        results[i]["img"] = "http://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
        // Banner
        results[i]["banner"] = "http://image.tmdb.org/t/p/w500" + results[i]["backdrop_path"];
    }
    return results;
}
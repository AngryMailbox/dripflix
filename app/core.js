// Core

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
    let data = await search(query);
    return data.results;
};


export async function getContent(type, p = "1") {

    let data = {};
    let results = [];

    switch (type) {
        case "trending":
            data = await trending();
            results = await rewriteId(data.results);
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

        results[i]["img"] = "http://image.tmdb.org/t/p/w500" + results[i]["poster_path"];
    }
    return results;
}
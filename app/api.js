// Api library

import axios from "axios";

const key = "11d80f4ac3cbcb689a66664b509c4cc5";

const i = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

// const req = function (link, params) {
//     i.get(link, params).then(
//         function (response) {
//             return response;
//         }
//     )
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         });
// };

export async function search(type, q) {
    let params = {
        api_key: key,
        query: q,
        language: "en-US",
        page: "1",
        include_adult: "false"
    };
    try {
        let resp = await i.get("search/movie", { params });
        console.log(resp);
        return resp.data;
    } catch (error) {
        console.error(error);
    }
};

export async function get(id) {
    let params = {
        api_key: key,
        language: "en-US"
    };
    try {
        let resp = await i.get("movie/" + id, { params });
        return resp;
    } catch (error) {
        console.error(error);
    }


};

export async function images(id) {
    let params = {
        api_key: key,
        language: "en-US"
    };
    try {
        let resp = await i.get("movie/" + id + "/images", { params });
        return resp;
    } catch (error) {
        console.error(error);
    }
    return resp;

};

export async function popular() {
    let params = {
        api_key: key,
        language: "en-US",
        page: "1"
    };
    try {
        let resp = await i.get("movie/popular", { params });
        return resp;
    } catch (error) {
        console.error(error);
    }
};

export async function trending() {
    let params = {
        api_key: key
    };
    try {
        let resp = await i.get("trending/movie/week", { params });
        return resp.data;
    } catch (error) {
        console.error(error);
    }
};
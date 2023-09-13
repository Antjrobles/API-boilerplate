const express = require("express");
const router = express.Router();
const { supabase } = require("../config/supabaseClient.js");


const getLinks = (req, res) => {
    const links = {
        grid: "https://codepen.io/Antjrobles/pen/qBJwjWV",
        crypto_marquee: "https://codepen.io/Antjrobles/pen/OJBzMEB",
    };
    res.send(links);
};

const getData = (req, res) => {
    const data = {
        name: "John Doe",
        age: 25,
        city: "San Diego",
        state: "California",
        country: "United States",
        hobbies: ["coding", "reading", "gaming", "hiking", "traveling"],
    };
    res.send(data);
};


const getCountries = async (req, res) => {

    const { data, error } = await supabase
        .from("countries")
        .select("*"); // TODO select fields
        // TODO add ordering?

    res.json(data);
};

// CODE
const getCodes = async (req, res) => {


    let { data, error } = await supabase
        .from('countries')
        .select('Code')
        // TODO add  .limit, with very large data is will blow up the server memory
        // TODO add ordering?

    // TODO make use of error 5 lines above, if error, then throw an error code to the consumer
    
    // Maps the data and extract the Codes removing duplicates
    const codes = [];
    // TODO null check on `data`
    data.forEach(entry => {

        if (!codes.includes(entry.Code)) {
            codes.push(entry.Code);
        }
    });

    res.json(codes);

};

module.exports = {
    getLinks,
    getData,
    getCountries,
    getCodes,
};

const axios = require("axios");

const search = async (title) => {
  if (!title) {
    return {
      done: false,
      msg: "Please enter a name",
    };
  }
  const instance = axios.create({
    baseURL: "http://www.omdbapi.com/",
    timeout: 1000,
    params: {
      s: title,
      apikey: process.env.API_KEY,
    },
  });
  try {
    const { data } = await instance.get();
    return {
      done: true,
      data,
    };
  } catch (err) {
    return {
      done: false,
      err,
    };
  }
};

const movies = async (search = "action") => {
  const instance = axios.create({
    baseURL: "http://www.omdbapi.com/",
    timeout: 1000,
    params: {
      s: search,
      apikey: process.env.API_KEY,
      type: "movie",
    },
  });
  try {
    const { data } = await instance.get();
    return {
      done: true,
      data,
    };
  } catch (err) {
    return {
      done: false,
      err,
    };
  }
};

const descriptionMovie = async (idMovie) => {
  const instance = axios.create({
    baseURL: "http://www.omdbapi.com/",
    timeout: 1000,
    params: {
      i: idMovie,
      apikey: process.env.API_KEY,
      type: "movie",
    },
  });
  try {
    const { data } = await instance.get();
    return {
      done: true,
      data,
    };
  } catch (err) {
    return {
      done: false,
      err,
    };
  }
};

module.exports = {
  search,
  movies,
  descriptionMovie
};
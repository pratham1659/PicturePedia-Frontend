import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjY4ZDMxYWIzZmI4YjE5YjQ5ZWUxZDMzNmU4N2RlOCIsInN1YiI6IjY1N2NhMTkyZWEzOTQ5MDBmZWIwZmM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.htFEYczPXlGbj_z2xgnUS3VKavlCgELgFxnI0BM_W3w";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.error("getJobs error:", err);
    return err;
  }
};

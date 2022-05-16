import axios from "../../utils/axios";

export const getDataMovie = (page, limit) => {
  return {
    type: "GET_DATA_MOVIE",
    payload: axios.get(`movie?page=${page}&limit=${limit}`)
  };

  // export const postMovie = (form) => {
  //   return {
  //     type: "POST_MOVIE",
  //     payload: axios.post("movie", form)
  //   };
  // };
  
  // export const updateMovie = (id, form) => {
  //   return {
  //     type: "UPDATE_MOVIE",
  //     payload: axios.patch(`movie/${id}`, form)
  //   };
  // };
  
  // export const deleteMovie = (id) => {
  //   return {
  //     type: "DELETE_MOVIE",
  //     payload: axios.patch(`movie/${id}`)
  //   };
};
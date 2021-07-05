import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchItems = (category, sort, page) => (dispatch) => {
  dispatch(setLoaded(false));

  axios
    .get(
      `https://api.themoviedb.org/3/${
        category === 0 ? "movie" : "tv"
      }/${sort}?api_key=ccc9a4bc732f366b3a0a8622dd0ecc77&language=uk&page=${page}`
    )
    .then(({ data }) => {
      dispatch(category === 0 ? setMovies(data) : setTV(data));
    });
};

export const setMovies = (items) => ({
  type: "SET_MOVIES",
  payload: items,
});
export const setTV = (items) => ({
  type: "SET_TV",
  payload: items,
});

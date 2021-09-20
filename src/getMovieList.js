import axios from "axios";

const getMovieList = (baseURL, setMovies, setError) => {
  axios
    .get(baseURL)
    .then((response) => {
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setError({
          status: false,
          message: "",
        });
      } else {
        setError({
          status: true,
          message: "Could not find this title. try another",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getMovieList;

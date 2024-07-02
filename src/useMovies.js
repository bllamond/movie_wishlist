
import { useState , useEffect } from "react";

const Key = "eec6ba4f";

export function useMovies(query , callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");


  useEffect(
    function () {

        callback?.();
      // for cleanup of previous unused fetch request
      const controller = new AbortController();

      async function settingMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${Key}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response == "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          console.log(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");

        return;
      }

    //   handleCloseMovie();
      settingMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return {movies, isLoading ,error};
}
import { ref, watch, type Ref } from "vue";

import type { ApiData } from "../types/api.types";
import type { BaseMovieCardProps } from "../components/BaseMovieCard/BaseMovieCard.types";

export const useMovieFetch = (query: Ref<string>, page: Ref<number>) => {
  let throttleTimeout: ReturnType<typeof setTimeout> | null = null;

  const searchQuery = ref("");

  const queryLoaded = ref(false);
  const loading = ref(false);

  const movies = ref<BaseMovieCardProps[]>([]);
  const total = ref(0);

  const fetchMovies = async () => {
    loading.value = true;

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${searchQuery.value}&page=${page.value}`
      );

      const { Response, Search, totalResults } =
        (await response.json()) as ApiData;

      if (Response !== "True") {
        throw new Error("Error fetching movies");
      }

      movies.value = Search.map((movie) => ({
        title: movie.Title,
        poster: movie.Poster,
        year: movie.Year,
        imdbId: movie.imdbID,
        type: movie.Type,
      }));

      total.value = +totalResults || Search.length;
    } catch {
      movies.value = [];
      total.value = 0;
    } finally {
      loading.value = false;
      queryLoaded.value = true;
    }
  };

  watch(query, (newQuery) => {
    if (throttleTimeout) {
      clearTimeout(throttleTimeout);
    }

    throttleTimeout = setTimeout(() => {
      searchQuery.value = newQuery;
    }, 500);
  });

  watch(searchQuery, () => {
    movies.value = [];
    total.value = 0;
    queryLoaded.value = false;

    if (page.value !== 1) {
      page.value = 1;
      return;
    }

    fetchMovies();
  });

  watch(page, fetchMovies);

  return { queryLoaded, searchQuery, loading, movies, total };
};

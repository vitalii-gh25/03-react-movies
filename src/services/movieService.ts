import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";

interface FetchMoviesParams {
  query?: string;
  page?: number;
}

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies({
  query = "",
  page = 1,
}: FetchMoviesParams): Promise<MoviesResponse> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const config = {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response: AxiosResponse<MoviesResponse> = await axios.get(
    `${BASE_URL}/search/movie`,
    config
  );

  return response.data;
}

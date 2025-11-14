import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export async function fetchMovies(
  query: string,
  page = 1
): Promise<MoviesResponse> {
  const url = `${BASE_URL}/search/movie`;

  const config = {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDg4MmRlZTQ3MzE5NmE0MzA5NWM5NGYwNmIwYzE3MiIsIm5iZiI6MTc2Mjg1Mzc0NC45OTUwMDAxLCJzdWIiOiI2OTEzMDM3MGViNjNmY2JiY2ZkMjYxNDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QN8Mk_pcl8k91glBEm8IelQBgMv7ruWcr1h74pyZ53E",
    },
  };

  const response: AxiosResponse<MoviesResponse> = await axios.get(url, config);

  response.data.results = response.data.results.filter(
    (movie) => movie.poster_path && movie.backdrop_path
  );

  return response.data;
}

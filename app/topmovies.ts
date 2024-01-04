import { redirect } from "@remix-run/node";
import { delayFetch } from "./utils";

export type Movie = {
  imageurl: string[];
  genre: string[];
  imdbid: string;
  title: string;
  imdbrating: number;
  released: number;
  synopsis: string;
  type: string;
};

export type MovieSearchResult = {
  imageurl: string[];
  genre: string[];
  title: string;
  imdbrating: number;
  released: number;
  synopsis: string;
  type: string;
};

export type CustomError = {
  search: boolean;
};

const results = {
  page: 1,
  results: [
    {
      // imageurl: [
      //   "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
      // ],
      genre: ["Action", "Adventure", "Animation"],
      title: "Mortal Kombat Legends: Scorpion's Revenge",
      imdbrating: 7.4,
      released: 2020,
      synopsis:
        "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.",
      type: "movie",
    },
    {
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      genre: ["Action", "Adventure", "Animation"],
      title: "Mortal Kombat Legends: Scorpion's Revenge",
      imdbrating: 7.4,
      released: 2020,
      synopsis:
        "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.",
      type: "movie",
    },
    {
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      genre: ["Action", "Adventure", "Animation"],
      title: "Mortal Kombat Legends: Scorpion's Revenge",
      imdbrating: 7.4,
      released: 2020,
      synopsis:
        "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.",
      type: "movie",
    },
    {
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      genre: ["Action", "Adventure", "Animation"],
      title: "Mortal Kombat Legends: Scorpion's Revenge",
      imdbrating: 7.4,
      released: 2020,
      synopsis:
        "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.",
      type: "movie",
    },
    {
      imageurl: [
        "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
      ],
      genre: ["Action", "Adventure", "Animation"],
      title: "Mortal Kombat Legends: Scorpion's Revenge",
      imdbrating: 7.4,
      released: 2020,
      synopsis:
        "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.",
      type: "movie",
    },
  ],
};

const movies: Movie[] = [
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
    ],
    genre: ["Action", "Adventure", "Animation"],
    imdbid: "tt9580138",
    title: "Mortal Kombat Legends: Scorpion's Revenge",
    imdbrating: 7.4,
    released: 2020,
    synopsis:
      "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.",
    type: "movie",
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
    ],
    genre: ["Action", "Adventure", "Animation"],
    imdbid: "tt95801",
    title: "Mortal Kombat Legends: Scorpion's Revenge",
    imdbrating: 7.4,
    released: 2020,
    synopsis:
      "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.",
    type: "movie",
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
    ],
    genre: ["Action", "Adventure", "Animation"],
    imdbid: "tt90138",
    title: "Mortal Kombat Legends: Scorpion's Revenge",
    imdbrating: 7.4,
    released: 2020,
    synopsis:
      "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.",
    type: "movie",
  },
];

/**
 * Obtiene una lista de las mejores películas de un género aleatorio.
 *
 * @returns {Promise<Movie[]>} Una promesa que se resuelve en una lista de películas.
 */
export async function getTopMovies() {
  const fetch = require("node-fetch");
  // Definir la URL base y las opciones de solicitud.
  const baseUrl = "https://ott-details.p.rapidapi.com";
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
  };

  try {
    // return { movies, genre: 'action' }
    const genreUrl = `${baseUrl}/getParams?param=genre`;
    const genreResponse: any = await delayFetch(genreUrl, { headers });
    const genreList = await genreResponse.json();
    const genre = genreList[Math.floor(Math.random() * genreList.length)];
    const movieUrl = `${baseUrl}/advancedsearch?end_year=2020&genre=${genre}&type=movie&sort=highestrated&page=1`;
    const movieResponse: any = await delayFetch(movieUrl, { headers });
    if (!movieResponse.ok) {
      throw new Error(`Error al buscar las mejores películas de ${genre}: ${movieResponse.status} ${movieResponse.statusText}`);
    }
    const movieList = await movieResponse.json();
    // Ordenar los resultados por fecha y devolver los 3 más recientes
    let response = await movieList.results
      .sort((a: Movie, b: Movie) => b.released - a.released)
      .slice(0, 3);
    return { movies: response, genre };
  } catch (error: any) {
    throw new Error(`Error al obtener las mejores películas: ${error.message}`);
  }
}

/**
 * Busca una película por título y devuelve los resultados de la búsqueda.
 *
 * @param {string} title - El título de la película a buscar.
 * @returns {Promise<MovieSearchResult[]>} Una promesa que se resuelve en una lista de resultados de búsqueda.
 */
export async function requestMovie(title: string) {
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
  };

  const url = `https://ott-details.p.rapidapi.com/search?title=${title}&page=1`;
  try {
    // return results.results;
    const response: any = await delayFetch(url, { headers });
    if (!response.ok) {
      throw new Error(
        `Error al buscar la película "${title}": ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();

    return data.results;
  } catch (error: any) {
    throw new Error(`Error al buscar la película "${title}": ${error.message}`);
  }
}

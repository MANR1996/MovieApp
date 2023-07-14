import { redirect } from "@remix-run/node";

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

export async function searchMovie(searchFild: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return results.results;
  // return redirect("/topmovies/searched");
}

export function getTopMovies() {
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
  return movies;
}

export async function requestMovie(title: string) {
  const fetch = require("node-fetch");

  const url = `https://ott-details.p.rapidapi.com/search?title=${title}&page=1`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8776e5b734msh0cd3da0bebe4098p196e69jsna281d0503238",
      "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    // const result = await response.text();
    return results.results;
    // return result;
  } catch (error) {
    console.error(error);
  }
}

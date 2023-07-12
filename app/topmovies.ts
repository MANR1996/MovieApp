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

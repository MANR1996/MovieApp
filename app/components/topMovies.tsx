import { Movie } from "~/topmovies";
import TopMoviesCard from "./topMovieCard";

export default function TopMovies(props: any) {
    const { movies } = props;
    return (
        <div>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {movies.map((movie: Movie) => (
                    <TopMoviesCard movie={movie} key={movie.imdbid} />
                ))}
            </div>
        </div>
    )
}
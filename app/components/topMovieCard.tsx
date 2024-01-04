import defaultImage from "../../public/defaultImage.webp";
import StarIcon from './starIcon';

export default function topMovieCard(props: any) {

    const { movie } = props;

    return (<div key={movie.imdbid} className="group relative">
        <div
            style={{ overflow: "visible" }}
            className="card-box relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-2 sm:aspect-w-1 lg:aspect-h-1 lg:aspect-w-1 sm:h-96"
        >
            <div className="card">
                <div className="front-card">
                    <img
                        style={{ borderRadius: "0.5rem" }}
                        src={
                            movie.imageurl && movie.imageurl.length > 0
                                ? movie.imageurl[0]
                                : defaultImage
                        }
                        alt={movie.title}
                        className="front-card h-full w-full object-cover object-center"
                    />
                </div>
                <div className="front-card back-card">
                    <div className="overflow-hidden rounded-lg bg-melrose-200 shadow-melrose-400 shadow sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-96 flex-col flex place-content-center">
                        <div
                            className="group"
                            style={{ margin: "24px 24px 8px", minHeight: "6%" }}
                        >
                            <time className="text-base">
                                <span className="text-base font-semibold text-melrose-700">
                                    Lanzamiento:
                                </span>{" "}
                                {movie.released}
                            </time>
                        </div>
                        <div style={{ maxHeight: "80%" }}>
                            <h3
                                className="group"
                                style={{ margin: "0 24px 8px", minHeight: "6%" }}
                            >
                                <span className="text-base font-semibold text-melrose-700">
                                    Género:
                                </span>{" "}
                                {movie.genre.join(", ")}
                            </h3>
                            <p
                                className="text-base text-gray-900 overflow-auto"
                                style={{ maxHeight: "90%", padding: "0 24px 24px" }}
                            >
                                <span className="text-base font-semibold text-melrose-700">
                                    Sinopsis:
                                </span>{" "}
                                {movie.synopsis}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h3 className="mt-6 text-sm text-melrose-900 flex items-center">
            {movie.imdbrating}
            <StarIcon />
        </h3>
        <p className="text-base font-semibold text-melrose-950">
            {movie.title}
        </p>
    </div>)
}
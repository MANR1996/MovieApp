import {
  Form,
  useLoaderData,
  useTransition,
  useActionData,
  Outlet,
} from "@remix-run/react";
import {
  getTopMovies,
  searchMovie,
  Movie,
  MovieSearchResult,
  CustomError,
  requestMovie,
} from "~/topmovies";
import { ActionArgs, LoaderArgs, json, redirect } from "@remix-run/node";

export async function loader({ params }: LoaderArgs) {
  return requestMovie(params.searched);
}

export default function Index() {
  const transition = useTransition();
  let movies = useLoaderData<MovieSearchResult[]>();

  return (
    <>
      {transition.state == "loading" && (
        <div className="w-full place-content-center flex mt-7">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Buscando...
            </span>
          </div>
        </div>
      )}
      <div className="flex flex-row p-9 flex-wrap place-content-around">
        {movies.map((el) => (
          <div
            style={{ minWidth: "400px" }}
            className="shadow-melrose-400 shadow my-12 flex flex-col rounded-lg bg-white md:max-w-xl md:flex-row"
          >
            <img
              className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={
                el.imageurl && el.imageurl.length > 0
                  ? el.imageurl[0]
                  : "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg"
              }
              alt={el.title}
            />
            <div className="flex flex-col justify-start p-6 bg-melrose-200 ">
              <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                {el.title}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 max-h-64 overflow-auto">
                {el.synopsis}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-300">
                {el.released}
              </p>
              {el.imdbrating ? <p className="text-xs text-neutral-500 flex items-center dark:text-neutral-300">
                {el.imdbrating}
                <svg
                  style={{ marginLeft: "4px" }}
                  height="12px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 47.94 47.94"
                  xmlSpace="preserve"
                >
                  <path
                    style={{ fill: "#ED8A19" }}
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
              </p> : <p className="text-xs text-neutral-500 flex items-center dark:text-neutral-300">Sin clasificación</p>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

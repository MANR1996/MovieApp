import { Form } from "@remix-run/react";
import { Outlet } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { getTopMovies, Movie } from "~/topmovies";
import type { LoaderArgs } from "@remix-run/node";

export async function loader({ request }: LoaderArgs) {
  return getTopMovies();
}

function Search() {
  const manejarKeyPress = (evento: Event) => {
    if (evento.charCode === 13) {
      evento.preventDefault();
      console.log("buscando");
    }
  };

  const buscar = () => {
    console.log("buscando");
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 pb-9">
      <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div
          className="grid place-items-center h-full w-12 text-gray-300 cursor-pointer group hover:bg-slate-100"
          onClick={() => buscar()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <Form method="post" className="w-full">
          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 px-2"
            type="text"
            onKeyPress={manejarKeyPress}
            id="search"
            placeholder="Search by title..."
          />
        </Form>
      </div>
    </div>
  );
}

export default function Index() {
  let movies = useLoaderData<Movie[]>();

  return (
    <>
      {/* <div className="bg-gray-100"> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:max-w-none lg:py-24">
          <h2 className="text-2xl font-bold text-gray-900">
            Mejores películas de...
          </h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {movies.map((movie) => (
              <div key={movie.imdbid} className="group relative">
                <div
                  style={{ overflow: "visible" }}
                  className="carta-box relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-2 sm:aspect-w-1 lg:aspect-h-1 lg:aspect-w-1 sm:h-96"
                >
                  <div className="carta">
                    <div className="cara">
                      <img
                        style={{ borderRadius: "0.5rem" }}
                        src={movie.imageurl[0]}
                        alt={movie.title}
                        className="cara h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="cara detras">
                      <div className="overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-96">
                        <div
                          className="group"
                          style={{ margin: "24px 24px 8px", height: "6%" }}
                        >
                          <time className="text-base">
                            <span className="text-base font-semibold text-gray-900">
                              Lanzamiento:
                            </span>{" "}
                            {movie.released}
                          </time>
                        </div>
                        <div style={{ height: "80%" }}>
                          <h3
                            className="group"
                            style={{ margin: "0 24px 8px", height: "6%" }}
                          >
                            <span className="text-base font-semibold text-gray-900">
                              Género:
                            </span>{" "}
                            {movie.genre.join(", ")}
                          </h3>
                          <p
                            className="text-base text-gray-900 overflow-auto"
                            style={{ height: "90%", padding: "0 24px 24px" }}
                          >
                            <span className="text-base font-semibold text-gray-900">
                              Sinopsis:
                            </span>{" "}
                            {movie.synopsis}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 text-sm text-gray-500 flex items-center">
                  {movie.imdbrating}
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
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {movie.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <Outlet /> */}
      <Search />
    </>
  );
}

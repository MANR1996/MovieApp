import { Outlet } from "@remix-run/react";

const callouts = [
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
    ],
    genre: ["Action", "Adventure", "Animation"],
    imdbid: "tt9580138",
    title: "Mortal Kombat Legends: Scorpion's Revenge",
    imageAlt: "Mortal Kombat Legends: Scorpion's Revenge",
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
    imdbid: "tt9580138",
    title: "Mortal Kombat Legends: Scorpion's Revenge",
    imageAlt: "Mortal Kombat Legends: Scorpion's Revenge",
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
    imdbid: "tt9580138",
    title: "Mortal Kombat Legends: Scorpion's Revenge",
    imageAlt: "Mortal Kombat Legends: Scorpion's Revenge",
    imdbrating: 7.4,
    released: 2020,
    synopsis:
      "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.",
    type: "movie",
  },
];

export default function Index() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">
              Mejores películas de...
            </h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.imdbid} className="group relative">
                  <div
                    style={{ overflow: "visible" }}
                    className="carta-box relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-2 sm:aspect-w-1 lg:aspect-h-1 lg:aspect-w-1 sm:h-96"
                  >
                    <div className="carta">
                      <div className="cara">
                        <img
                          style={{ borderRadius: "0.5rem" }}
                          src={callout.imageurl[0]}
                          alt={callout.imageAlt}
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
                              {callout.released}
                            </time>
                          </div>
                          <div style={{ height: "80%" }}>
                            <h3
                              className="group"
                              style={{ margin: "0 24px 8px", height: "6%" }}
                            >
                              <span className="text-base font-semibold text-gray-900">
                                {callout.genre.join(", ")}
                              </span>
                            </h3>
                            <p
                              className="text-base text-gray-900 overflow-auto"
                              style={{ height: "90%", padding: "0 24px 24px" }}
                            >
                              {callout.synopsis}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500 flex items-center">
                    {callout.imdbrating}
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
                    {callout.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

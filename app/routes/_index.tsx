import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "react-router-dom";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "MovieApp - Catalog and rating of movies" },
    { name: "description", content: "Movie search application to know on which platform it is available, ratings, synopsis, actors and much more... If you don't know what to watch, let yourself be guided by its recommendations." },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-5x1 text-red-500">Welcome to Remix</h1>
      <Link className="underline text-blue-500" to='topmovies'>MovieApp</Link>
    </div>
  );
}

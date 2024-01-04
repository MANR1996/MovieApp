import { useState } from 'react';
import {
  Form,
  useLoaderData,
  useTransition,
  useActionData,
  Outlet,
} from "@remix-run/react";
import { getTopMovies, CustomError } from "~/topmovies";
import { ActionArgs, LoaderArgs, json, redirect } from "@remix-run/node";
import defaultImage from "../../public/defaultImage.webp";
import SearchForm from '~/components/search';
import TopMoviesList from '~/components/topMovies';

export async function loader({ request }: LoaderArgs) {
  return getTopMovies();
}
export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const searchFild = formData.get("search");
  let errors = { search: false };
  if (searchFild.trim() == "") errors.search = true;
  if (Object.values(errors).some((error) => error)) {
    return errors
  };
  return redirect(`/topmovies/${searchFild}`);
}

function Search() {
  let errors = useActionData<CustomError>();
  const transition = useTransition();

  return (
    <SearchForm errors={errors} transition={transition} />
  );
}

function TopMovies() {
  let { movies, genre } = useLoaderData();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {movies && movies.length > 0 && (
        <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:max-w-none lg:py-24">
          <h2 className="text-2xl font-bold text-melrose-950">
            Recomendación actual, género: {genre}
          </h2>
          <TopMoviesList movies={movies} />
        </div>
      )}
    </div>
  );
}

export default function Index() {
  return (
    <>
      <TopMovies />
      <Search />
      <Outlet />
    </>
  );
}

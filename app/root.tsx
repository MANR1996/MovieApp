import { cssBundleHref } from "@remix-run/css-bundle";
import { useState } from "react";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailWindStyles from "./styles/tailwind.css";
import styles from "./styles/topmovies.css";
import { signUpAction, signInAction } from "./auth";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailWindStyles },
    { rel: "stylesheet", href: styles },
  ];
  // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }, { rel: "stylesheet", href: cssBundleHref }] : []),
};

export default function App() {
  const [showModal, setShowModal] = useState<string>("");

  const Menu = () => {
    const [navbar, setNavbar] = useState(false);

    return (
      <nav className="w-full bg-purple-500 shadow">
        <div className="justify-between px-4 mx-auto lg:items-center lg:flex lg:px-8 md:items-center md:flex md:px-8 xl:items-center xl:flex xl:px-8 2xl:items-center 2xl:flex 2xl:px-8 py-2">
          <div>
            <div className="flex items-center justify-between md:block xl:block 2xl:block lg:block p-0">
              <Link to="/">
                <svg
                  style={{ padding: "2px" }}
                  version="1.0"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="h-9 w-9 bg-white rounded-lg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1200 1200"
                  enableBackground="new 0 0 1200 1200"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      fill="#2F394E"
                      d="M680.393,302.229H39.345v258.319c0,0,315.73,38.274,315.73,339.662h306.15L680.393,302.229z"
                    />
                    <rect
                      x="770.805"
                      y="130.006"
                      fill="#43413F"
                      width="196.133"
                      height="110.017"
                    />
                    <rect
                      x="770.805"
                      y="959.967"
                      fill="#43413F"
                      width="196.133"
                      height="110.028"
                    />
                    <rect
                      x="605.743"
                      y="240.023"
                      fill="#EF4837"
                      width="526.217"
                      height="703.265"
                      style={{ fill: "rgb(132, 75, 170)" }}
                    />
                    <path
                      fill="#36394E"
                      d="M577.038,240.023c0,18.495,14.975,33.469,33.469,33.469h516.669c18.494,0,33.48-14.974,33.48-33.469l0,0&#10;&#9;&#9;c0-18.494-14.985-33.479-33.48-33.479H610.507C592.013,206.544,577.038,221.529,577.038,240.023L577.038,240.023z"
                    />
                    <path
                      fill="#36394E"
                      d="M577.038,952.806c0,18.505,14.975,33.5,33.469,33.5h516.669c18.494,0,33.48-14.995,33.48-33.5l0,0&#10;&#9;&#9;c0-18.474-14.985-33.469-33.48-33.469H610.507C592.013,919.337,577.038,934.332,577.038,952.806L577.038,952.806z"
                    />
                    <rect
                      x="957.921"
                      y="304.198"
                      fill="#FDB522"
                      width="129.154"
                      height="52.678"
                      style={{ fill: "rgb(47, 57, 78)" }}
                    />
                    <rect
                      x="957.921"
                      y="387.937"
                      fill="#FDB522"
                      width="129.154"
                      height="52.637"
                      style={{ fill: "rgb(47, 57, 78)" }}
                    />
                    <rect
                      x="957.921"
                      y="471.616"
                      fill="#FDB522"
                      width="129.154"
                      height="52.648"
                      style={{ fill: "rgb(47, 57, 78)" }}
                    />
                    <rect
                      x="957.921"
                      y="555.315"
                      fill="#FDB522"
                      width="129.154"
                      height="52.678"
                      style={{ fill: "rgb(47, 57, 78)" }}
                    />
                    <rect
                      x="957.921"
                      y="639.045"
                      fill="#FDB522"
                      width="129.154"
                      height="52.647"
                      style={{ fill: "rgb(47, 57, 78)" }}
                    />
                    <rect
                      x="957.921"
                      y="722.744"
                      fill="#FDB522"
                      width="129.154"
                      height="52.626"
                      style={{ fill: "rgb(47, 57, 78)" }}
                    />
                    <rect
                      x="957.921"
                      y="806.422"
                      fill="#FDB522"
                      width="129.154"
                      height="52.678"
                      style={{ fill: "rgb(47, 57, 78)" }}
                    />
                  </g>
                </svg>
              </Link>
              <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 lg:block lg:pb-0 lg:mt-0 xl:block xl:pb-0 xl:mt-0 2xl:block 2xl:pb-0 2xl:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 lg:flex lg:space-x-6 lg:space-y-0 xl:flex xl:space-x-6 xl:space-y-0 2xl:flex 2xl:space-x-6 2xl:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <a href="">Home</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="">Blog</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="">About US</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="">Contact US</a>
                </li>
              </ul>

              <div className="mt-3 space-y-2 lg:hidden xl:hidden 2xl:hidden md:hidden ">
                <span
                  className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 cursor-pointer"
                  onClick={() => {
                    setShowModal("signIn");
                  }}
                >
                  Sign in
                </span>
                <span
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setShowModal("signUp");
                  }}
                >
                  Sign up
                </span>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block lg:inline-block xl:inline-block 2xl:inline-block">
            <span
              className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800 cursor-pointer"
              onClick={() => {
                setShowModal("signIn");
              }}
            >
              Sign in
            </span>
            <span
              className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setShowModal("signUp");
              }}
            >
              Sign up
            </span>
          </div>
        </div>
      </nav>
    );
  };

  const SingUpForm = () => {
    const [email, setEmail] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const signUp = async (e) => {
      setLoading(true);
      e.preventDefault();
      let resp = await signUpAction(email, userName, pass);
      setLoading(false);
      if (resp === true) {
        setErrorMessage("");
        return setShowModal("");
      }
      setErrorMessage(resp.errorMessage);
    };

    return (
      <form
        className="w-full max-w-sm pb-11 mx-auto"
        onSubmit={(e) => signUp(e)}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 text-center">
            <label
              className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4 text-center"
              htmlFor="inline-full-name"
            >
              Correo
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="correo@ejemplo.com"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 text-center">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              UserName
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Debe ser único"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 text-center">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Contraseña
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
          </div>
        </div>
        {errorMessage != "" && (
          <div className="md:flex md:items-center mb-6">
            <div className="w-full text-center">
              <div
                className="text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{errorMessage}</span>
              </div>
            </div>
          </div>
        )}
        <div className="md:flex md:items-center place-content-center">
          {!loading ? (
            <div>
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Entrar
              </button>
            </div>
          ) : (
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
        </div>
        <div className="md:flex md:items-center mt-6">
          <label className="md:w-full block text-gray-500 font-bold text-center">
            <span className="text-sm">
              Si ya tienes una cuenta, click{" "}
              <span
                className="text-purple-500 underline cursor-pointer"
                onClick={() => setShowModal("signIn")}
              >
                aquí
              </span>{" "}
              para entrar
            </span>
          </label>
        </div>
      </form>
    );
  };

  const SignInForm = () => {
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const signIn = async (e) => {
      setLoading(true);
      e.preventDefault();
      let resp = await signInAction(email, pass);
      setLoading(false);
      if (resp === true) {
        setErrorMessage("");
        return setShowModal("");
      }
      setErrorMessage(resp.errorMessage);
    };

    return (
      <form
        className="w-full max-w-sm pb-11 mx-auto"
        onSubmit={(e) => signIn(e)}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 text-center">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4 text-center"
              htmlFor="inline-full-name"
            >
              Correo
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="email"
              placeholder="correo@ejemplo.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 text-center">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Contraseña
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
          </div>
        </div>
        {errorMessage != "" && (
          <div className="md:flex md:items-center mb-6">
            <div className="w-full text-center">
              <div
                className="text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{errorMessage}</span>
              </div>
            </div>
          </div>
        )}
        <div className="md:flex md:items-center place-content-center">
          {!loading ? (
            <div>
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Entrar
              </button>
            </div>
          ) : (
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
        </div>
        <div className="md:flex md:items-center mt-6">
          <label className="md:w-full block text-gray-500 font-bold text-center">
            <span className="text-sm text-center text-center">
              Pulsa{" "}
              <span
                className="text-purple-500 underline cursor-pointer"
                onClick={() => setShowModal("signUp")}
              >
                aquí
              </span>{" "}
              si aún no tienes una cuenta
            </span>
          </label>
        </div>
      </form>
    );
  };

  const Modal = () => {
    return (
      <div
        id="authentication-modal"
        className="overflow-x-hidden overflow-y-auto fixed h-modal md:h-screen top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center flex "
        style={{ backdropFilter: "brightness(0.5)" }}
        aria-modal="true"
        role="dialog"
      >
        <div className="relative w-screen max-w-md px-4 sm:p-0 h-screen md:h-auto">
          <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-purple-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
                onClick={() => setShowModal("")}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {showModal == "signUp" ? <SingUpForm /> : <SignInForm />}
          </div>
        </div>
      </div>
    );
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="bg-gray-100 min-h-screen">
          <Menu />
          <Outlet />
          {/* <SingUpForm /> */}
          {showModal != "" && <Modal />}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}

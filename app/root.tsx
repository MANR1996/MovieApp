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

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailWindStyles },
    { rel: "stylesheet", href: styles },
  ];
  // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }, { rel: "stylesheet", href: cssBundleHref }] : []),
};

function Menu() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-purple-500 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:py-2 md:block">
            <Link to="/">
              <svg
                version="1.0"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="h-9 w-9"
                x="0px"
                y="0px"
                viewBox="0 0 1200 1200"
                enable-background="new 0 0 1200 1200"
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
            <div className="md:hidden">
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
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="javascript:void(0)">Blog</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="javascript:void(0)">About US</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="javascript:void(0)">Contact US</a>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </a>
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <a
            href="javascript:void(0)"
            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
          >
            Sign in
          </a>
          <a
            href="javascript:void(0)"
            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
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
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}

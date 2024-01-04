import { cssBundleHref } from "@remix-run/css-bundle";
import { useState } from "react";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailWindStyles from "./styles/tailwind.css";
import styles from "./styles/topmovies.css";
import Header from "./components/header";
import Modal from "./components/modal";
import SignInForm from "./components/singInForm";
import SignUpForm from "./components/singUpForm";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailWindStyles },
    { rel: "stylesheet", href: styles },
  ];
  // ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }, { rel: "stylesheet", href: cssBundleHref }] : []),
};

export default function App() {
  const [showModal, setShowModal] = useState<string>("");

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="bg-melrose-50 min-h-screen">
          <Header setShowModal={setShowModal} />
          <Outlet />
          {showModal != "" && (
            <Modal closeModal={setShowModal}>
              {showModal != "signUp" ? <SignInForm setShowModal={setShowModal} /> :
                <SignUpForm setShowModal={setShowModal} />}
            </Modal>)}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}

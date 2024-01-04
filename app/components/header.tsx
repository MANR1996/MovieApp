import { useState } from "react";
import { signInAction, signUpAction } from "~/auth";
import { Link } from "@remix-run/react";
import Logo from "~/components/logoIcon";
import BurguerMenuIcon from "~/components/burguerMenuIcon";

export default function Header(props: any) {
    const {
        setShowModal
    } = props;

    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-melrose-200 shadow-melrose-400 shadow">
            <div className="justify-between px-4 mx-auto lg:items-center lg:flex lg:px-8 md:items-center md:flex md:px-8 xl:items-center xl:flex xl:px-8 2xl:items-center 2xl:flex 2xl:px-8 py-2">
                <div>
                    <div className="flex md-bg-melrose-50 rounded-md items-center justify-between md:block xl:block 2xl:block lg:block p-0 ">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden bg-melrose-500 rounded">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                <BurguerMenuIcon navbar={navbar} />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 lg:block lg:pb-0 lg:mt-0 xl:block xl:pb-0 xl:mt-0 2xl:block 2xl:pb-0 2xl:mt-0 ${navbar ? "block" : "hidden"}`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 lg:flex lg:space-x-6 lg:space-y-0 xl:flex xl:space-x-6 xl:space-y-0 2xl:flex 2xl:space-x-6 2xl:space-y-0">
                            <li className="hover:bg-melrose-500 hover:text-white rounded-[8px] text-melrose-700 px-2 py-1 flex cursor-pointer place-content-center">
                                <a href="">Home</a>
                            </li>
                            <li className="hover:bg-melrose-500 hover:text-white rounded-[8px] text-melrose-700 px-2 py-1 flex cursor-pointer place-content-center">
                                <a href="">Blog</a>
                            </li>
                            <li className="hover:bg-melrose-500 hover:text-white rounded-[8px] text-melrose-700 px-2 py-1 flex cursor-pointer place-content-center">
                                <a href="">About US</a>
                            </li>
                            <li className="hover:bg-melrose-500 hover:text-white rounded-[8px] text-melrose-700 px-2 py-1 flex cursor-pointer place-content-center">
                                <a href="">Contact US</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden xl:hidden 2xl:hidden md:hidden ">
                            <span
                                className="inline-block w-full px-4 py-2 text-center text-white bg-melrose-500 rounded-md shadow hover:bg-melrose-700 cursor-pointer"
                                onClick={() => {
                                    setShowModal("signIn");
                                }}
                            >
                                Sign in
                            </span>
                            <span
                                className="inline-block w-full px-4 py-2 text-center text-white bg-melrose-700 rounded-md shadow hover:bg-melrose-900 cursor-pointer"
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
                        className="px-4 py-2 text-white bg-melrose-500 rounded-md shadow hover:bg-melrose-900 cursor-pointer"
                        onClick={() => {
                            setShowModal("signIn");
                        }}
                    >
                        Sign in
                    </span>
                    <span
                        className="px-4 py-2 text-white bg-melrose-700 rounded-md shadow hover:bg-melrose-900 cursor-pointer"
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

}
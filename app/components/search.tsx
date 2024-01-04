import { ComponentProps, useState } from "react";
import {
    Form,
    useLoaderData,
    useTransition,
    useActionData,
    Outlet,
} from "@remix-run/react";

export default function SearchForm(props: any) {
    const {
        errors,
        transition,
    } = props;

    const [showError, setShowError] = useState(true);


    return (
        <div className="max-w-md mx-auto bg-gray-100 pb-9">
            <div
                className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
                style={
                    showError && errors?.search
                        ? { border: "1px solid rgb(185, 28, 28)" }
                        : { border: "1px solid rgb(168, 85, 247)" }
                }
            >
                <Form method="post" className="w-full h-full flex">
                    <button
                        className={
                            transition.state == "submitting"
                                ? "grid place-items-center h-full w-12 text-gray-300 cursor-not-allowed group bg-slate-100"
                                : "grid place-items-center h-full w-12 text-gray-300 cursor-pointer group hover:bg-slate-100"
                        }
                        type="submit"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                style={
                                    showError && errors?.search
                                        ? { stroke: "rgb(185, 28, 28)" }
                                        : { stroke: "rgb(168, 85, 247)" }
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                    <div className="w-full">
                        <input
                            onChange={(event) => event.target.value.trim() == "" ? setShowError(true) : setShowError(false)}
                            className="hover:shadow-lg peer h-full w-full outline-none text-sm text-gray-700 px-2"
                            type="text"
                            name="search"
                            disabled={transition.state == "submitting"}
                            placeholder="Search by title..."
                        />
                    </div>
                </Form>
            </div>
            {showError && errors?.search && (
                <div className="text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">Debe insertar un título</span>
                </div>
            )}
            {transition.state == "submitting" && (
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
    )
}
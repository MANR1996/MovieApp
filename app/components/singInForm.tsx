import { useState } from "react";
import { signInAction } from "~/auth";

export default function SignInForm(props: any) {

    const { setShowModal } = props;

    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const signIn = async (e: any) => {
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
                    <span className="text-sm text-center">
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
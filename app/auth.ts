import { redirect } from "@remix-run/node";
import { waitOneSecond } from "./utils";

export async function signUpAction(
  email: string,
  userName: string,
  password: string
) {
  const headers = {
    "Content-Type": "application/json",
  };

  const data = {
    screen_name: userName,
    email: email,
    password: password,
  };

  const url = `https://list.ly/api/v4/auth/signup`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    console.log("response", response);
    if (!response.ok) {
      // throw new Error(
      //   `Error al crear la cuenta}": ${response.status} ${response.statusText}`
      // );
      const data = await response.json();
      return {
        status: data.errors[0].status,
        errorMessage: data.errors[0].message,
      };
    }
    const data = await response.json();
    sessionStorage.setItem("userInfo", JSON.stringify(data.user));
    return response.ok;
  } catch (error: Error) {
    throw new Error(`Error al crear la cuenta: ${error.message}`);
  }
}

export async function signInAction(email: string, password: string) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const data = {
    email: email,
    password: password,
  };

  const url = `https://list.ly/api/v4/auth/signin`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);
    console.log("response", response);
    if (!response.ok) {
      const data = await response.json();
      return {
        status: data.errors[0].status,
        errorMessage: data.errors[0].message,
      };
    }
    const data = await response.json();
    sessionStorage.setItem("userInfo", JSON.stringify(data.user));
    return response.ok;
  } catch (error: Error) {
    throw new Error(`Error al crear la cuenta: ${error.message}`);
  }
}

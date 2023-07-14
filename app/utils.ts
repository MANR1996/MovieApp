// Esperar un segundo utilizando una función de promesa.
export function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

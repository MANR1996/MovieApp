export const delayFetch = (url: string, options: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(url, options);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    }, 3000);
  });
};
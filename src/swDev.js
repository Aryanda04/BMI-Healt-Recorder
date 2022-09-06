const swDev = () => {
  let swUrl = `./sw.js`;
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.warn("response", response);
  });
};
export default swDev;

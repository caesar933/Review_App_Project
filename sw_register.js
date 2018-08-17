document.addEventListener("DOMContentLoaded", event => {

    // Service Worker registration
     
    if (navigator.serviceWorker) {
      navigator.serviceWorker
        .register("serviceWorker.js")
        .then(registration => console.log("SW_registered", registration))
        .catch(e => console.log("SW failed :(", e));
    }
  });

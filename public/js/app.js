if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
        .then(function(registration) {
            console.log("Page controlled by SW with scope: ", registration.scope);
        }).catch(function(err){
            console.log("Serviceworker registration failed cuz: ", err);
        })
}
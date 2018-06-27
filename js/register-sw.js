if ('serviceWorker' in navigator) {

navigator.serviceWorker
  .register('./service-worker.js', { scope: './'})
  .then(function(registration){
    console.log("service worker registered")
  })
  .catch(function(err){
    console.log("service worker not registered",err)
  })
}

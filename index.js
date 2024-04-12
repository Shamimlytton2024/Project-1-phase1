// document.addEventListener("DOMContentloaded" , ()=> {
//     const fetchLikeButton = document.getElementById("fetchLikeButton");
//     const shareButton = document.getElementById("shareButton");
//     const commentButton = document.getElementById("commentButton");
//     })
//     fetchLikeButton.addEventListener("click",  function () {
//       fetchsunrise_sunset();
//     });

//     fetchshareButton.addEventListener("click", function () {
//       fetchsunrise_sunset ();
//     })
//     fetchcommentButton.addEventListener("click" , function() {
//       fetchcommentButton.addEventListener("click")
//     })
let results = {}

async function getData(lat, long){
      let latitude = lat
        let longitude = long
        let api_url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&timezone=GMT/Jerusalemi&date=2024-04-11` 
        console.log(api_url)
        let data = await fetch(api_url)
        let resp = await data.json()
        results=resp.results
        console.log(resp.results)
        return resp.results
}
document.addEventListener("DOMContentLoaded" ,()=> {
  FormData.addEventListener("submit" , (event)=> {
    Input.value = ""
  })
  fetch("https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&timezone=GMT/Jerusalem&date=2024-04-11`")
  .then(res => res.json)
  .then(data => {
    let res = getData(31.771959, 35.217018)
    console.log(results)

    document.getElementById('sunrise'),innerHtml = data.results.sunrise;
    document.getElementById('sunset'),innerHtml = data.results.sunset;
  })
})




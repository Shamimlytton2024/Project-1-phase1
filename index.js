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
  let form = document.querySelector("form");
  
  let input = document.getElementById("input")



  form.addEventListener("submit" , (event)=> {
    event.preventDefault()
    let latLo = input.value
    let long = latLo.split(",")[0]
    let lat = latLo.split(",")[1]
    console.log(long, lat)
    Input.value = "log,lat"

  })
  
  fetch`https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&timezone=GMT/Jerusalemi&date=2024-04-11` 
let (res => res.json ())
.then(data => {
  let res = getData(log,lat);
  console.log(results)

})
  
 document.getElementById("sunrise").innerHTML = data.results.sunrise
 document.getElementById("sunset").innerHTML = data.results.sunset
})




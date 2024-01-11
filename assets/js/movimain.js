
cl(baseurl)





document.addEventListener('DOMContentLoaded', async function(){
    let currenturl = new URL(window.location.href);
    let queryparams = new URLSearchParams(currenturl.search);
let movieId=queryparams.get("movieid");
cl(movieId);

let movieurl=`${baseurl}/movie/${movieId}?api_key=${apikey}`;
cl(movieurl);
let movievideourl=`${baseurl}/movie/${movieId}/videos?api_key=${apikey}`;


let moviobj= await makeapicall(movieurl,"GET");
let movivideo=await makeapicall(movievideourl,"GET");

cl(moviobj);
cl(movivideo);

})
const heroimgid=document.getElementById("heroimgid");
heroimgid.style.backgroundImage=`url(https://image.tmdb.org/t/p/original${newobj.backdrop_path})`


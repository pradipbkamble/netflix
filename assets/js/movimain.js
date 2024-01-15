


cl(baseurl)



const heroimgid = document.getElementById("heroimgid");

document.addEventListener('DOMContentLoaded', async function () {
    let currenturl = new URL(window.location.href);
    let queryparams = new URLSearchParams(currenturl.search);
    let movieId1 = queryparams.get("movieid");
    cl(movieId1);

    let movieurl = `${baseurl}/movie/${movieId1}?api_key=${apikey}`;
    cl(movieurl);
    let movievideourl = `${baseurl}/movie/${movieId1}/videos?api_key=${apikey}`;


    let moviobj = await makeapicall(movieurl, "GET");
    let movivideo = await makeapicall(movievideourl, "GET");


    cl(moviobj);
    cl(movivideo);

    let imgurl = `https://image.tmdb.org/t/p/original${moviobj.backdrop_path}`;
    heroimgid.style.backgroundImage = `url(${imgurl})`;
})
cl(moviobj)



// heroimgid.style.backgroundImage=`url("https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg")`;


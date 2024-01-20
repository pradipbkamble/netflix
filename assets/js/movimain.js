


cl(baseurl)



const heroimgid = document.getElementById("heroimgid");
const movimaincontainer = document.getElementById("movimaincontainer");
const backpageid = document.getElementById("backpageid");




let tempmain = (maintemp, nametemp) => {
    let result1 = `
  <figure class="figinfo">
  <div class="allinform">
  <img src="https://image.tmdb.org/t/p/original/${maintemp.production_companies[0].logo_path}"class="figlogo"  alt="${maintemp.title || maintemp.original_name}">
  <figcaption>
      <h2>
      ${maintemp.title || maintemp.original_name}
      </h2>
      <ul class="movidetailse">
          <li>${maintemp.release_date}</li>
          <li>
              <span class="spambox">
                  ${maintemp.adult ? "A" : "U"}
              </span>
          </li>
          <li>
              ${maintemp.runtime}
          </li>
          <li>
              ${maintemp.genres.map(elemt => elemt.name).join(" , ")}
          </li>
          

      </ul>
      <p class="overview">
   ${maintemp.overview}
      </p>
      <p class="starcasts">
       <strong>Starring</strong>:${nametemp.cast.filter(cast => cast.order >= 0 && cast.order <= 7).map(cast1 => cast1.name)}
      </p>
  </figcaption>
  </div>
</figure>`

    movimaincontainer.innerHTML = result1;
}






document.addEventListener('DOMContentLoaded', async function () {
    let currenturl = new URL(window.location.href);
    let queryparams = new URLSearchParams(currenturl.search);
    let movieId1 = queryparams.get("movieid");
    cl(movieId1);

    let movieurl = `${baseurl}/movie/${movieId1}?api_key=${apikey}`;
    cl(movieurl);
    let movievideourl = `${baseurl}/movie/${movieId1}/videos?api_key=${apikey}`;
    let movicreditsurl = `${baseurl}/movie/${movieId1}/credits?api_key=${apikey}`;
    cl(movicreditsurl)

    // let moviobj = await makeapicall(movieurl, "GET");
    // let movivideo = await makeapicall(movievideourl, "GET");
    // let movicredit=await makeapicall(movicreditsurl,"GET");


    // cl(moviobj);
    // cl(movivideo);
    //   cl(movicredit)
    let [moviobj, movivideo, movicredit] = await Promise.all([makeapicall(movieurl, "GET"), makeapicall(movievideourl, "GET"), makeapicall(movicreditsurl, "GET")])
    cl(moviobj);
    cl(movivideo);
    cl(movicredit);
    let imgurl = `https://image.tmdb.org/t/p/original${moviobj.backdrop_path}`;
    heroimgid.style.backgroundImage = `url(${imgurl})`;
    tempmain(moviobj, movicredit);
    $('#videoslider').owlCarousel();
})

backpageid.addEventListener("click", function () {
    history.back()
})



// heroimgid.style.backgroundImage=`url("https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg")`;


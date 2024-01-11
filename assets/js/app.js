let cl = console.log;




const baseurl = "https://api.themoviedb.org/3/";
const apikey = `726d526427fe1cb49983c8daeb114609`;
const trendingmoviesurl = `${baseurl}/trending/all/week?api_key=${apikey}`;
cl(trendingmoviesurl);

const trendingslider = document.getElementById("trendingslider");



// const makeapicall=(apiurl,method,msgbody=null)=>{
//   return fetch(apiurl,{
//         body:msgbody,
//         method:methodname,

//     })
//     .then(res=>{
//         return res.json()
//     })
// }

let temp=(aray)=>{
let result='';
aray.forEach(newobj=>{
    result+=`
    <div class="item">
        <figure class="m-0 movicard"id="${newobj.id}">
            <img src="https://image.tmdb.org/t/p/original/${newobj.poster_path}" alt="movi1"
                title="movi1">
            <figcaption class="caption d-flex flex-column justify-content-center pl-3">
                <h3 class="display-3">${newobj.title || newobj.original_name}</h3>
                <em>
                   ${newobj.overview}
                </em>
            </figcaption>
        </figure> 
    </div> 
    `
});
trendingslider.innerHTML= result;
}




const makeapicall = async(apiurl, methodname, msgbody = null) => {
    let res = await fetch(apiurl, {
        body: msgbody,
        method: methodname,
       
    })
    return res.json()
}

const gettrendingmovie = async() => {
    let trendingData = await makeapicall(trendingmoviesurl, "GET")

    temp(trendingData.results)
    $('#trendingslider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        timer:1000,
        navText:['<i class="fa-solid fa-angles-left"></i>','<i class="fa-solid fa-angles-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })  
}

gettrendingmovie();



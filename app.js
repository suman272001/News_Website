
apikey_news='2f7d36801cab47fd89635233413bbec8';
const apiurl_news2="&apiKey=";
const api_news1="https://newsapi.org/v2/everything?q=";
let v=document.querySelector(".main-news-container");
//let ser=document.getElementById("search");
//let ab=document.getElementById("search-engine");
document.querySelectorAll(".search")[0].addEventListener("click",function(){
  let search=document.querySelector("#search-engine").value;
  apik(search)
})
apik("India")
  
 async function apik(news){
 let response=await fetch(api_news1+news+apiurl_news2+apikey_news);
  var data_news=await response.json();
  console.log(data_news);
  let newshtml="";
  let m=data_news.articles.length;
  let a=0;
  for(let i=0;i<m;i++)
  {
    let im=data_news.articles[a].urlToImage;
    if(im===null)
    {
      i=i+1;
      a=a+1;
    }
    else{
    let con=data_news.articles[a].description;
    let news=`<div class="div-news-container"class="first-div">
        <div class="flex-news-back">
            <img src="${data_news.articles[a].urlToImage}"class="img-news-center"id="image1st">
            <h3 class="heading">${data_news.articles[a].title}</h3>
        <p class="main-news-show" id="tempa">"${con.slice(0,200)}"....<a href="${data_news.articles[a].url}"class="read"><span class="show-news">More</span></a></p>
        
        </div>
    </div>`;
    newshtml+=news;
    a=a+1;
    }
  };
  v.innerHTML=newshtml;
 }
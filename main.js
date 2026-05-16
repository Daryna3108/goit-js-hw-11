import{a as m,S as p,i as l}from"./assets/vendor-B0XWlCgv.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function g(o){const r=`https://pixabay.com/api/?key=55893182-8e8d8d313eea42e04d9d959ce&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return m.get(r).then(s=>s.data)}const y=new p(".gallery a",{captionsData:"alt",captionDelay:250}),d=document.querySelector(".gallery"),a=document.querySelector(".loader");function h(o){const i=o.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${r}" alt="${e}" />
          </a>
          <div class="info">
            <div class="info-item"><b>Likes</b><span>${t}</span></div>
            <div class="info-item"><b>Views</b><span>${n}</span></div>
            <div class="info-item"><b>Comments</b><span>${u}</span></div>
            <div class="info-item"><b>Downloads</b><span>${f}</span></div>
          </div>
        </li>`).join("");d.innerHTML=i,y.refresh()}function b(){d.innerHTML=""}function v(){a&&a.classList.remove("is-hidden")}function L(){a&&a.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault();const i=o.target.elements["search-text"].value.trim();if(!i){l.warning({message:"Please enter a search query!",position:"topRight"});return}b(),v(),g(i).then(r=>{if(r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#fff"});return}h(r.hits)}).catch(r=>{console.error(r),l.error({message:"Something went wrong, please try again later.",position:"topRight"})}).finally(()=>{L(),c.reset()})});
//# sourceMappingURL=main.js.map

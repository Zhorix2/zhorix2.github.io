async function loadJSON(path){
const res = await fetch(path);
return await res.json();
}

async function loadArticles(){
const data = await loadJSON('data/articles.json');
const container = document.getElementById('articles-container');

data.forEach(item=>{
container.innerHTML += `
<div class="card">
<div class="tag">${item.tag}</div>
<h2>${item.title}</h2>
<img src="${item.image}">
<p>${item.preview}</p>
<p>${item.text}</p>
</div>
`;
});
}

async function loadRecipes(){
const data = await loadJSON('data/recipes.json');
const container = document.getElementById('recipes-container');

data.forEach(item=>{
container.innerHTML += `
<div class="card">
<div class="tag">${item.tag}</div>
<h2>${item.title}</h2>
<img src="${item.image}">
<p><b>Ингредиенты:</b> ${item.ingredients}</p>
<p>${item.text}</p>
</div>
`;
});
}

async function loadGallery(){
const data = await loadJSON('data/gallery.json');
const container = document.getElementById('gallery-container');

container.innerHTML='<div class="gallery"></div>';
const gallery = container.querySelector('.gallery');

data.forEach(item=>{
gallery.innerHTML += `<img src="${item.image}" title="${item.title}">`;
});
}

const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.getElementById("region").textContent = tz;

loadArticles();
loadRecipes();
loadGallery();
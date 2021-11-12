const bar = document.querySelector(".bar");
const links = document.querySelector(".mid-side");
const icons = document.querySelector(".right-side");

bar.addEventListener("click", function(){
    links.classList.toggle("show-links");
    icons.classList.toggle("show-icons");
    bar.classList.toggle("bar-rotate");
    
});

let openFace = document.querySelector('.open');
let closeFace = document.querySelector('.close');

closeFace.addEventListener('click',() => {
    if(closeFace.classList.contains("active")){
        closeFace.classList.remove("active");
        openFace.classList.add("active");
    }
});

openFace.addEventListener('click', () => {
    if(openFace.classList.contains("active")){
        openFace.classList.remove("active");
        closeFace.classList.add("active");
    }
});
var scrollTopBtn = document.getElementById("scrollTop");
window.addEventListener("scroll",()=>{
    if (scrollY > 75) {
        scrollTopBtn.classList.add("show");
    }else{
        scrollTopBtn.classList.remove("show");
    }
})
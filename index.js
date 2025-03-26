window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercent = (scrollTop / docHeight) * 100;

    document.querySelector(".bar-bg").style.background = 
        `linear-gradient(to right, rgb(162, 169, 222) ${scrollPercent}%, rgba(162, 169, 222, 0.3) ${scrollPercent}%)`;
});
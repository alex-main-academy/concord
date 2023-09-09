function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const targetPosition =
            targetElement.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
}

document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("policy__link")) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        smoothScroll(targetId);
    }
});

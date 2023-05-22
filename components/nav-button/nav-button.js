

export function navButtonPrevious(broccoli) {
    const navButtonPrevious = document.createElement("button");
    navButtonPrevious.classList.add("button", "button--prev");
    navButtonPrevious.textContent = "previous";
    navButtonPrevious.addEventListener("click", broccoli);
    return navButtonPrevious;
}
export function navButtonNext(broccoli) {
    const navButtonNext = document.createElement("button");
    navButtonNext.classList.add("button", "button--next");
    navButtonNext.textContent = "next";
    navButtonNext.addEventListener("click", broccoli);
    return navButtonNext;
}
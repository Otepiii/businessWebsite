const navSlide = () => {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".main-nav")

  burger.addEventListener("click", () => {
    nav.classList.add("nav-active")
    burger.style.display = "none"
  })
}

const closeNav = () => {
  const close = document.querySelector(".close-burger")
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".main-nav")

  close.addEventListener("click", () => {
    nav.classList.remove("nav-active")
    burger.style.display = "inline"
  })
}

navSlide()
closeNav()

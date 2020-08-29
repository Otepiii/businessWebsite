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

const popup = document.querySelector(".chat-popup")
const chatBtn = document.querySelector("#chat-btn")
const chatBtn2 = document.querySelector("#chat-btn2")
const submitBtn = document.querySelector(".submit")
const chatArea = document.querySelector(".chat-area")
const inputElm = document.querySelector("input")

chatBtn.addEventListener("click", () => {
  popup.classList.toggle("show")
})

chatBtn2.addEventListener("click", () => {
  popup.classList.toggle("show")
})

submitBtn.addEventListener("click", () => {
  let userInput = inputElm.value

  let temp = `<div class="out-msg">
  <span class="my-msg">${userInput}</span>
  <img src="img/me.jpg" class="avatar">
  </div>`

  chatArea.insertAdjacentHTML("beforeend", temp)
  inputElm.value = ""
})

navSlide()
closeNav()

function toggle(element) {
    element.classList.toggle("hide")
  }
  
  function show(element) {
    element.classList.remove("hide")
  }
  
  function hide(elements) {
    elements.forEach((element) => {
      element.classList.add("hide")
    })
  }
  
  function rotate(element) {
    element.classList.toggle("open")
  }

  const menuBtn1 = document.querySelector(".guide0 h1")
const menuBtn2 = document.querySelector(".menu2")
const menuBtn3 = document.querySelector(".menu3")
const menuBtn4 = document.querySelector(".menu4")
const menuBtn5 = document.querySelector(".menu5")
const menuBtn6 = document.querySelector(".menu6")
const menuBtn7 = document.querySelector(".menu7")
const menuBtn8 = document.querySelector(".menu8")

const drop = document.querySelector("#dropdown1")
const drop2 = document.querySelector("#dropdown2")
const drop3 = document.querySelector("#dropdown3")
const drop4 = document.querySelector("#dropdown4")
const drop5 = document.querySelector("#dropdown5")
const drop6 = document.querySelector("#dropdown6")
const drop7 = document.querySelector("#dropdown7")
const drop8 = document.querySelector("#dropdown8")

const subM1 = document.querySelector(".subMenu1")
const subM2 = document.querySelector(".subMenu2")
// const subM1 = document.querySelector(".subMenu1")
// const subM1 = document.querySelector(".subMenu1")
// const subM1 = document.querySelector(".subMenu1")
// const subM1 = document.querySelector(".subMenu1")
// const subM1 = document.querySelector(".subMenu1")
// const subM1 = document.querySelector(".subMenu1")
const subM8 = document.querySelector(".subMenu8")
const subC1 = document.querySelector("#sub-content1")
const subC2 = document.querySelector("#sub-content2")
// const subC1 = document.querySelector("#sub-content1")
// const subC1 = document.querySelector("#sub-content1")
// const subC1 = document.querySelector("#sub-content1")
// const subC1 = document.querySelector("#sub-content1")
// const subC1 = document.querySelector("#sub-content1")
// const subC1 = document.querySelector("#sub-content1")
const subC8 = document.querySelector("#sub-content8")
const arrow1 = document.querySelector(".guides-tutorials h1 i")
const arrow2 = document.querySelector(".guides-tutorials .menu2 i")
const arrow3 = document.querySelector(".guides-tutorials .menu3 i")
const arrow4 = document.querySelector(".topics .menu4 i")
const arrow5 = document.querySelector(".topics .menu5 i")
const arrow6 = document.querySelector(".topics .menu6 i")
const arrow7 = document.querySelector(".topics .menu7 i")
const arrow8 = document.querySelector(".topics .menu8 i")



menuBtn1.addEventListener("click", () => {
  toggle(drop)
  rotate(arrow1)
})

menuBtn2.addEventListener("click", () => {
  toggle(drop2)
  rotate(arrow2)
})

menuBtn3.addEventListener("click", () => {
  toggle(drop3)
  rotate(arrow3)
})

menuBtn4.addEventListener("click", () => {
toggle(drop4)
rotate(arrow4)
})

menuBtn5.addEventListener("click", () => {
  toggle(drop5)
  rotate(arrow5)

  })

menuBtn6.addEventListener("click", () => {
    toggle(drop6)
    rotate(arrow6)

    })

menuBtn7.addEventListener("click", () => {
      toggle(drop7)
      rotate(arrow7)

      })

      menuBtn8.addEventListener("click", () => {
        toggle(drop8)
        rotate(arrow8)
  
        })

subM1.addEventListener("click", () => {
  toggle(subC1)
})

subM8.addEventListener("click", () => {
  toggle(subC8)
})
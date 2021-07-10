const navSlide = () => {
  const burger = document.querySelector(".burger")
  const nav = document.querySelector(".main-nav")

  burger.addEventListener("click", () => {
    nav.classList.add("nav-active")
    burger.style.display = "none"
    console.log("hello")
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

function active(element) {
  element.classList.add("active")
}

function inactive(elements) {
  elements.forEach((element) => {
    element.classList.remove("active")
  })
}

// Modal items
const modal = document.getElementById("email-modal");
const openBtn = document.querySelector(".main-btn");
const closeBtn = document.querySelector(".close-btn");

// Click events
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
})

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"
  }
})

const profileBtn1 = document.querySelector(".profile-head1");
const profileBtn2 = document.querySelector(".profile-head2");
const profileBtn3 = document.querySelector(".profile-head3");
const profileBtn4 = document.querySelector(".profile-head4");
const profileBtn5 = document.querySelector(".profile-head5");
const profileC1 = document.querySelector("#profile-content1");
const profileC2 = document.querySelector("#profile-content2");
const profileC3 = document.querySelector("#profile-content3");
const profileC4 = document.querySelector("#profile-content4");
const profileC5 = document.querySelector("#profile-content5");


profileBtn1.addEventListener("click", () => {
  show(profileC1);
  hide([profileC2,profileC3,profileC4,profileC5])
  active(profileBtn1)
  inactive([profileBtn2,profileBtn5,profileBtn3,profileBtn4])
  console.log("it's working");
})

profileBtn2.addEventListener("click", () => {
  show(profileC2);
  hide([profileC1,profileC3,profileC4,profileC5])
  active(profileBtn2);
  inactive([profileBtn1,profileBtn5,profileBtn3,profileBtn4])
  console.log("it's working");
})

profileBtn3.addEventListener("click", () => {
  show(profileC3);
  hide([profileC1,profileC2,profileC4,profileC5])
  active(profileBtn3)
  inactive([profileBtn2,profileBtn5,profileBtn1,profileBtn4])
  console.log("it's working");
})

profileBtn4.addEventListener("click", () => {
  show(profileC4);
  hide([profileC1,profileC3,profileC2,profileC5])
  active(profileBtn4)
  inactive([profileBtn2,profileBtn5,profileBtn3,profileBtn1])
  console.log("it's working");
})

profileBtn5.addEventListener("click", () => {
  show(profileC5);
  hide([profileC1,profileC3,profileC4,profileC2])
  active(profileBtn5)
  inactive([profileBtn2,profileBtn1,profileBtn3,profileBtn4])
  console.log("it's working");
})


navSlide()
closeNav()



// const popup = document.querySelector(".chat-popup")
// const chatBtn = document.querySelector("#chat-btn")
// const chatBtn2 = document.querySelector("#chat-btn2")
// const submitBtn = document.querySelector(".submit")
// const chatArea = document.querySelector(".chat-area")
// const inputElm = document.querySelector("input")

// chatBtn.addEventListener("click", () => {
//   popup.classList.toggle("show")
// })

// chatBtn2.addEventListener("click", () => {
//   popup.classList.toggle("show")
// })

// submitBtn.addEventListener("click", () => {
//   let userInput = inputElm.value

//   let temp = `<div class="out-msg">
//   <span class="my-msg">${userInput}</span>
//   <img src="img/me.jpg" class="avatar">
//   </div>`

//   chatArea.insertAdjacentHTML("beforeend", temp)
//   inputElm.value = ""
// })

const menuBtn1 = document.querySelector(".guide0 h1")
const menuBtn2 = document.querySelector(".menu2")
const menuBtn3 = document.querySelector(".menu3")
const menuBtn4 = document.querySelector(".menu4")
const menuBtn5 = document.querySelector(".menu5")
const menuBtn6 = document.querySelector(".menu6")
const menuBtn7 = document.querySelector(".menu7")
const drop = document.querySelector("#dropdown1")
const drop2 = document.querySelector("#dropdown2")
const drop3 = document.querySelector("#dropdown3")
const drop4 = document.querySelector("#dropdown4")
const drop5 = document.querySelector("#dropdown5")
const drop6 = document.querySelector("#dropdown6")
const drop7 = document.querySelector("#dropdown7")
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
const arrow1 = document.querySelector(".guides-tutorials .menu1 i")
const arrow2 = document.querySelector(".guides-tutorials .menu2 i")
const arrow3 = document.querySelector(".guides-tutorials .menu3 i")
const arrow4 = document.querySelector(".topics .menu4 i")
const arrow5 = document.querySelector(".topics .menu5 i")
const arrow6 = document.querySelector(".topics .menu6 i")
const arrow7 = document.querySelector(".topics .menu7 i")


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

subM1.addEventListener("click", () => {
  toggle(subC1)
})

subM8.addEventListener("click", () => {
  toggle(subC8)
})


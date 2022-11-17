// ------------------------------Declaring my variables---------------------------------
const leftButton = document.querySelector(".left-arrow")
const rightButton = document.querySelector(".right-arrow")
const imageScroll = document.querySelector(".main-Page .image-container img")
const overlay = document.querySelector(".overlay")
const threeDtrigger = document.querySelector(".D-page")
const closeButton = document.querySelector(".close-button")
let translateX = 150
// ----------------------------------Some Functionalities--------------------------------
leftButton.addEventListener("click", () => {
  alert("This effect has not been implemented")
})
rightButton.addEventListener("click", () => {
  alert("Sorry this effect has not been implemenyed")
})
threeDtrigger.addEventListener("click", () => {
  overlay.style.display = "block"
})
closeButton.addEventListener("click", () => {
  overlay.style.display = "none"
})

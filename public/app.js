import "./components/AnimatedLoading.js"
import "./components/YouTubeEmbed.js"
import { API } from "./services/API.js"
import Router from "./services/Router.js"

window.app = {
  API,
  Router,
  showError: (
    message = "There was an error loading the page",
    goToHome = true
  ) => {
    document.querySelector("#alert-modal").showModal()
    document.querySelector("#alert-modal p").textContent = message
    if (goToHome) app.Router.go("/")
    return
  },
  closeError: () => {
    document.getElementById("alert-modal").close()
  },
  search: (event) => {
    event.preventDefault()
    const keywords = document.querySelector("input[type=search]").value
    if (keywords.length > 1) {
      app.Router.go(`/movies?q=${keywords}`)
    }
  },
}
window.addEventListener("DOMContentLoaded", () => {
  app.Router.init()
})

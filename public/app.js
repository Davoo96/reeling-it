import { API } from "./services/API.js"
import "./components/HomePage.js"

window.app = {
  search: (event) => {
    event.preventDefault()
    const keywords = document.querySelector('input[type="search"]').value
  },
  api: API,
}

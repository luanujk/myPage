let toggleMode = () => {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
    img.setAttribute(
      "alt",
      "Foto de Luan Ujaque"
    )
  } else {
    img.setAttribute("src", "https://avatars.githubusercontent.com/u/120577867?v=4")
    img.setAttribute(
      "alt",
      "Foto de Luan Ujaque"
    )
  }
}

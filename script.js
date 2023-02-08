function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* Pegar a TAG IMG */
  const img = document.querySelector("#profile img")

  /* Substituir a imagem*/
  if (html.classList.contains("light")) {
    /* Se tiver light mode, adicionar a imagem light */
    img.setAttribute("src", "./mode/light-avatar.png")
    img.setAttribute("alt", "Avatar Light Fontechn")
  } else {
    /* Se tiver dark mode, adicionar a imagem dark */
    img.setAttribute("src", "./mode/dark-avatar.png")
    img.setAttribute("alt", "Avatar Dark Fontechn")
  }
}

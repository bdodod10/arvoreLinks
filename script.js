function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if (html.classList.contains ('light')) {
  //html.classList.remove ('light')
  //}
  //else {
  //  html.classList.add ('light')}
  //TOGGLE RESUME TUDO ISSO!!

  const img = document.querySelector('#profile img')

  if (html.classList.contains ('light')) {
  img.setAttribute("src", "./assets/avatar-light.png")
  }
  else {
  img.setAttribute("src", "./assets/avatar.png")
  }

  const alt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    alt.setAttribute("alt", ("Imagem de Douglas Rafael Munhoz Garcia!"))
  } else {
    alt.setAttribute(
      "alt",
      ("Imagem do criador sentado em São Miguel das Missões - RS")
    )
  }

  
}
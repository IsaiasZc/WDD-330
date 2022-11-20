const form = document.forms["form"];

form.addEventListener("submit", (event) => {

  event.preventDefault()

  // const input = new HTMLInputElement();
  console.log(form.texto.validity);
})
document.addEventListener("keydown", (event) => {
  try {

    let audio = document.querySelector(`audio[data-key="${event.which}"]`);
    let key = document.querySelector(`div[data-key="${event.which}"]`);

    // console.log(key);
    // console.log(typeof audio.duration);
    key.classList.add("playing");
    setTimeout(() => key.classList.remove("playing"), audio.duration * 1000)
    
    audio.load();
    audio.play();
  } catch {

    throw new Error("Esa tecla no está permitida");
  }

})
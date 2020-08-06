(() => {
  console.log('fried!');
  
  let popUp = document.querySelector(".popup"),
      lbClose = popUp.querySelector("span"),
      buttons1 = document.querySelectorAll(".button1"),
      buttons2 = document.querySelectorAll(".button2"),
      name = document.querySelector(".name"),
      selfIntro = document.querySelector(".selfIntroduction"),
      contents = document.querySelectorAll(".contentContainer"),
      images = document.querySelector(".popup-photo");

  const personalInfo = [
  ["KIMBERLY", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam sit amet elit lacinia pellentesque at sit amet quam. Cras id tincidunt ante, nec viverra eros. Proin nec nisl blandit, luctus leo eget, convallis dui. In ac lorem ac nulla sollicitudin consectetur vitae ut elit. Duis nisi mi, vestibulum quis luctus sit amet, consectetur rutrum lorem. Nullam molestie et ex sit amet dapibus. Fusce ultrices orci quis finibus vestibulum. Mauris augue nunc, consequat id nisl vitae, varius pretium purus.`],
  ["JENNY", `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac quam sit amet elit lacinia pellentesque at sit amet quam. Cras id tincidunt ante, nec viverra eros. Proin nec nisl blandit, luctus leo eget, convallis dui. In ac lorem ac nulla sollicitudin consectetur vitae ut elit. Duis nisi mi, vestibulum quis luctus sit amet, consectetur rutrum lorem. Nullam molestie et ex sit amet dapibus. Fusce ultrices orci quis finibus vestibulum. Mauris augue nunc, consequat id nisl vitae, varius pretium purus.`]  
  ]

  function showLightbox() {
    popUp.classList.add('showPopup');
  }

  function hideLightbox() {
    popUp.classList.remove('showPopup');
  }

  function showContent() {
    name.textContent = `${personalInfo[this.dataset.offset][0]}`;
    selfIntro.textContent = `${personalInfo[this.dataset.offset][1]}`;
  }

  function changeImage() {
    
  }


  buttons1.forEach(button1 => button1.addEventListener("click", showLightbox));
  buttons2.forEach(button2 => button2.addEventListener("click", showLightbox));
  contents.forEach(content => content.addEventListener("click", showContent));
  lbClose.addEventListener("click", hideLightbox);
})();

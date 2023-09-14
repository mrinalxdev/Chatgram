const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");


window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

window.addEventListener("scroll", reveal);

function reveal () {
  let reveal = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveal.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveal[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if(revealTop < windowHeight - revealPoint){
      reveal[i].classList.add('active')
    }else {
      reveal[i].classList.remove('active')
    }
  }
  
}

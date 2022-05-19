const Games = document.querySelectorAll(".game");
const EldenRing = document.querySelector(".er");

Games.forEach((game) => {
  game.addEventListener("mouseenter", () => {
    setTimeout(() => {
      game.classList.add("active");
    }, 150);
  });
  game.addEventListener("mouseleave", () => {
    setTimeout(() => {
      game.classList.remove("active");
    }, 150);
  });
});

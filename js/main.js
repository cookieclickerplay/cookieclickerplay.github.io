// Danh sách game
const games = [
  {
    title: "Cookie Clicker",
    thumbnail: "images/games/cookie-clicker.jpg",
    url: "https://games-online.io/game/cookie-clicker/",
    description: "Click cookies to earn more cookies!",
  },
  {
    title: "Cake Maker",
    thumbnail: "images/games/cake-maker.jpg",
    url: "https://games-online.io/game/cake-maker/",
    description: "Create delicious virtual cakes!",
  },
  {
    title: "Eggy Car",
    thumbnail: "images/games/eggy-car.jpg",
    url: "https://webglmath.github.io/eggy-car/",
    description: "Drive and complete challenging levels!",
  },
];

// Tạo game cards
function createGameCards() {
  const gameGrid = document.querySelector(".game-grid");

  games.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.className = "game-card";

    gameCard.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p>${game.description}</p>
                <a href="game.html?game=${encodeURIComponent(
                  game.url
                )}" class="play-button">Play Now</a>
            </div>
        `;

    gameGrid.appendChild(gameCard);
  });
}

// Khởi tạo khi trang load
document.addEventListener("DOMContentLoaded", () => {
  createGameCards();
});

document.addEventListener("DOMContantLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "sasack",
      img: "images/01.jpeg",
    },
    {
      name: "D.va",
      img: "images/02.jpeg",
    },
    {
      name: "The sky",
      img: "images/03.jpeg",
    },
    {
      name: "idk",
      img: "images/04.jpeg",
    },
    {
      name: "saber",
      img: "images/05.jpeg",
    },
    {
      name: "the-dead",
      img: "images/06.png",
    },
    {
      name: "color",
      img: "images/coloer.jpeg",
    },
    {
      name: "white",
      img: "images/White.png",
    },
  ];
  const grid = document.querySelector(".grid");
  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/coloer.jpeg");
      card.setAttribute("data-id", i);
      // card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }
  createBoard();
});

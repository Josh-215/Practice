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
  cardArray.sort(() => 0.5 - Math.random());
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
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

  //check for matches
  function flipcard() {
    var cards = this.getAttribute("data-id");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosenId[0] === cardsChosenId[1]) {
      alert("you found a match");
      cards[optionOneId].setAttribute("src", "images/White.png");
      cards[optionTwoId].setAttribute("src", "images/White.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/coloer.jpeg");
      cards[optionTwoId].setAttribute("src", "images/coloer.jpeg");
      alert("sorry try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "congratulation! you won";
    }
  }

  //flipcard
  function flipcard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
});

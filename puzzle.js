// generating a random number between 0 and 2
var randomNumber = Math.floor(Math.random() * 3);

//initializes the grids and elements based on random number generated.
window.onload = function () {
  var hideheader = document.getElementById("hideheader");
  var grid = document.getElementById("grid");
  var messages = document.getElementById("messages");
  var grid1 = document.getElementById("grid1");
  var grid2 = document.getElementById("grid2");
  var grid3 = document.getElementById("grid3");

  grid.style.display =
    randomNumber === 0 || randomNumber === 1 || randomNumber === 2
      ? "flex"
      : "none";
  hideheader.style.display =
    randomNumber === 0 || randomNumber === 1 || randomNumber === 2
      ? "block"
      : "none";
  messages.style.display =
    randomNumber === 0 || randomNumber === 1 || randomNumber === 2
      ? "block"
      : "none";
  grid1.style.display = randomNumber === 0 ? "grid" : "none";
  grid2.style.display = randomNumber === 1 ? "grid" : "none";
  grid3.style.display = randomNumber === 2 ? "grid" : "none";
  console.log(randomNumber);

  const playButton = document.getElementById("playbutton");
  playButton.addEventListener("click", () => {
    clearInterval(GAME.tickId);
    GAME.tickId = setInterval(GAME.tick, 1000);
    GAME.setState(State.start());
  });
};

class Box {
  // initializes the values for X and Y.
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  //it returns the box above the current box, or null if at the top edge
  getTopBox() {
    if (this.y === 0) return null;
    return new Box(this.x, this.y - 1);
  }

  // returns the box to the right of the current box, or null if at the right edge
  getRightBox() {
    if (randomNumber === 0) {
      if (this.x === 2) return null;
      return new Box(this.x + 1, this.y);
    } else if (randomNumber === 1) {
      if (this.x === 3) return null;
      return new Box(this.x + 1, this.y);
    } else {
      if (this.x === 4) return null;
      return new Box(this.x + 1, this.y);
    }
  }

  // returns the box below the current box, or null if at the bottom edge
  getBottomBox() {
    if (randomNumber === 0) {
      if (this.y === 2) return null;
      return new Box(this.x, this.y + 1);
    } else if (randomNumber === 1) {
      if (this.y === 3) return null;
      return new Box(this.x, this.y + 1);
    } else {
      if (this.y === 4) return null;
      return new Box(this.x, this.y + 1);
    }
  }

  // returns the box to the left of the current box, or null if at the left edge
  getLeftBox() {
    if (this.x === 0) return null;
    return new Box(this.x - 1, this.y);
  }

  //returns an array of neighboring boxes that are not null
  getNextdoorBoxes() {
    return [
      this.getTopBox(),
      this.getRightBox(),
      this.getBottomBox(),
      this.getLeftBox(),
    ].filter((box) => box !== null);
  }

  // Returns a random neighboring box that is not null
  getRandomNextdoorBox() {
    const nextdoorBoxes = this.getNextdoorBoxes();
    return nextdoorBoxes[Math.floor(Math.random() * nextdoorBoxes.length)];
  }
}

// swapping of the boxes
const swapBoxes = (grid, box1, box2) => {
  const temp = grid[box1.y][box1.x];
  grid[box1.y][box1.x] = grid[box2.y][box2.x];
  grid[box2.y][box2.x] = temp;
};

// checking if the number in grid are in ascending order for each grid
const isSolved = (grid) => {
  if (randomNumber === 0) {
    return (
      grid[0][0] === 1 &&
      grid[0][1] === 2 &&
      grid[0][2] === 3 &&
      grid[1][0] === 4 &&
      grid[1][1] === 5 &&
      grid[1][2] === 6 &&
      grid[2][0] === 7 &&
      grid[2][1] === 8 &&
      grid[2][2] === 0
    );
  } else if (randomNumber === 1) {
    return (
      grid[0][0] === 1 &&
      grid[0][1] === 2 &&
      grid[0][2] === 3 &&
      grid[0][3] === 4 &&
      grid[1][0] === 5 &&
      grid[1][1] === 6 &&
      grid[1][2] === 7 &&
      grid[1][3] === 8 &&
      grid[2][0] === 9 &&
      grid[2][1] === 10 &&
      grid[2][2] === 11 &&
      grid[2][3] === 12 &&
      grid[3][0] === 13 &&
      grid[3][1] === 14 &&
      grid[3][2] === 15 &&
      grid[3][3] === 0
    );
  } else {
    return (
      grid[0][0] === 1 &&
      grid[0][1] === 2 &&
      grid[0][2] === 3 &&
      grid[0][3] === 4 &&
      grid[0][4] === 5 &&
      grid[1][0] === 6 &&
      grid[1][1] === 7 &&
      grid[1][2] === 8 &&
      grid[1][3] === 9 &&
      grid[1][4] === 10 &&
      grid[2][0] === 11 &&
      grid[2][1] === 12 &&
      grid[2][2] === 13 &&
      grid[2][3] === 14 &&
      grid[2][4] === 15 &&
      grid[3][0] === 16 &&
      grid[3][1] === 17 &&
      grid[3][2] === 18 &&
      grid[3][3] === 19 &&
      grid[3][4] === 20 &&
      grid[4][0] === 21 &&
      grid[4][1] === 22 &&
      grid[4][2] === 23 &&
      grid[4][3] === 24 &&
      grid[4][4] === 0
    );
  }
};

// generating grids according to their size
const getRandomGrid = () => {
  let grid;
  if (randomNumber === 0) {
    grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 0],
    ];
  } else if (randomNumber === 1) {
    grid = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 0],
    ];
  } else {
    grid = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 0],
    ];
  }

  // Shuffling the grids
  let blankBox;
  if (randomNumber === 0) {
    blankBox = new Box(2, 2);
  } else if (randomNumber === 1) {
    blankBox = new Box(3, 3);
  } else {
    blankBox = new Box(4, 4);
  }
  for (let i = 0; i < 1000; i++) {
    const randomNextdoorBox = blankBox.getRandomNextdoorBox();
    swapBoxes(grid, blankBox, randomNextdoorBox);
    blankBox = randomNextdoorBox;
  }

  if (isSolved(grid)) return getRandomGrid();
  return grid;
};

class State {
  // initializing the values for grid, move, time, status, initialTime
  constructor(grid, move, time, status, initialTime) {
    this.grid = grid;
    this.move = move;
    this.time = time;
    this.status = status;
    this.initialTime = initialTime;
  }

  // to empty the grid when in initial state
  static ready() {
    if (randomNumber === 0) {
      return new State(
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        0,
        0,
        "ready"
      );
    } else if (randomNumber === 1) {
      return new State(
        [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        0,
        0,
        "ready"
      );
    } else {
      return new State(
        [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
        0,
        0,
        "ready"
      );
    }
  }

  // setting the star time for the countdown for each grid
  static start() {
    let initialTime;
    if (randomNumber === 0) {
      initialTime = 3 * 60000;
    } else if (randomNumber === 1) {
      initialTime = 7 * 60000;
    } else {
      initialTime = 10 * 60000;
    }
    console.log(initialTime);
    return new State(getRandomGrid(), 0, initialTime, "playing", initialTime);
  }
}

class Game {
  // initializing the state when play button is clicked
  constructor(state) {
    this.state = state;
    this.tickId = null;
    this.tick = this.tick.bind(this);
    this.handleClickBox = this.handleClickBox.bind(this);
    this.render();
  }

  // when puzzle is solved it will get back to ready state
  static ready() {
    return new Game(State.ready());
  }

  calculateScore(grid) {
    let score = 0;
    const MAX_SCORE = 100;

    // Calculate the score based on how many numbers are in their correct index
    let correctIndices = 0;
    const gridSize = grid.length;

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        if (grid[i][j] === i * gridSize + j + 1) {
          correctIndices++;
        }
      }
    }

    const totalIndices = gridSize * gridSize;
    const correctRatio = correctIndices / (totalIndices - 1);
    score = MAX_SCORE * correctRatio;

    return score;
  }

  tick() {
    if (this.state.time > 0) {
      this.setState({
        time: this.state.time - 1000, // Decrease time by 1 second (1000 milliseconds)
        initialTime: this.state.initialTime - 1000, // Decrease initialTime by 1 second (1000 milliseconds)
      });
    } else {
      clearInterval(this.tickId);
      // Calculate and display the score when the time is up
      const score = this.calculateScore(this.state.grid);
      this.setState({ status: "timeout" }); // Set the status to timeout
    }
  }

  // Updates the current state of the game with new state properties and triggers re-rendering
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  // Handles the click event on a box element
  handleClickBox(box) {
    return function () {
      // Get the neighboring boxes around the clicked box
      const nextdoorBoxes = box.getNextdoorBoxes();
      // Find the blank box among the neighboring boxes
      const blankBox = nextdoorBoxes.find(
        (nextdoorBox) => this.state.grid[nextdoorBox.y][nextdoorBox.x] === 0
      );
      // If a blank box is found adjacent to the clicked box
      if (blankBox) {
        const newGrid = [...this.state.grid];
        swapBoxes(newGrid, box, blankBox);
        if (isSolved(newGrid)) {
          clearInterval(this.tickId);
          this.setState({
            status: "won",
            grid: newGrid,
            move: this.state.move + 1,
          });
        } else {
          this.setState({
            grid: newGrid,
            move: this.state.move + 1,
          });
        }
      }
    }.bind(this);
  }

  render() {
    const { grid, move, time, status } = this.state;

    // Render grid
    const newGrid = document.createElement("div");

    // specifying the grid size based on random number generated
    var gridsize = 0;
    if (randomNumber === 0) {
      gridsize = 3;
      newGrid.setAttribute("id", "grid1");
    } else if (randomNumber === 1) {
      gridsize = 4;
      newGrid.setAttribute("id", "grid2");
    } else {
      gridsize = 5;
      newGrid.setAttribute("id", "grid3");
    }

    for (let i = 0; i < gridsize; i++) {
      for (let j = 0; j < gridsize; j++) {
        console.log(i);
        const button = document.createElement("button");

        if (status === "playing") {
          button.addEventListener("click", this.handleClickBox(new Box(j, i)));
        }

        button.textContent = grid[i][j] === 0 ? "" : grid[i][j].toString();
        newGrid.appendChild(button);
      }
    }
    if (randomNumber === 0) {
      document.getElementById("grid1").replaceWith(newGrid);
    } else if (randomNumber === 1) {
      document.getElementById("grid2").replaceWith(newGrid);
    } else {
      document.getElementById("grid3").replaceWith(newGrid);
    }

    // Render button
    const newButton = document.createElement("button");
    if (this.state.status === "ready") newButton.textContent = "Play";
    if (this.state.status === "playing") newButton.textContent = "Reset";
    if (this.state.status === "won" || this.state.status === "timeout")
      newButton.textContent = "Play"; // Handle timeout status
    newButton.addEventListener("click", () => {
      clearInterval(this.tickId);
      this.tickId = setInterval(this.tick, 1000);
      this.setState(State.start());
    });
    document.querySelector(".play-button button").replaceWith(newButton);

    // Render move
    document.getElementById("move").textContent = `Move: ${move}`;

    // Render time
    if (this.state.status !== "timeout") {
      const minutes = Math.floor(this.state.time / 60000);
      const seconds = Math.floor((this.state.time % 60000) / 1000);
      document.getElementById(
        "time"
      ).textContent = `Time Left: ${minutes}:${seconds}`;
    } else {
      document.getElementById("time").textContent = "Time's up!";
    }

    // Calculate user's score based on the current grid arrangement
    const score = this.calculateScore(grid);

    // Render score and message
    if (status === "won") {
      document.querySelector(".message").textContent = "You win!";
      document.getElementById("score").textContent = `Score: ${score.toFixed(
        2
      )}`;
    } else if (status === "timeout") {
      document.querySelector(".message").textContent = "Sorry!";
      document.getElementById("score").textContent = `Score: ${score.toFixed(
        2
      )}`;
    } else {
      document.querySelector(".message").textContent = "";
    }
  }
}

// Initialize the game
const GAME = Game.ready();

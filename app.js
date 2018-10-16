class Rover {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = "N";
    this.travelLog = [
      [x, y]
    ];
  }

  turnLeft() {
    if (this.direction === "N") {
      this.direction = "W";
    } else if (this.direction === "W") {
      this.direction = "S";
    } else if (this.direction === "S") {
      this.direction = "E";
    } else if (this.direction === "E") {
      this.direction = "N";
    }
  }

  turnRight() {
    if (this.direction === "N") {
      this.direction = "E";
    } else if (this.direction === "E") {
      this.direction = "S";
    } else if (this.direction === "S") {
      this.direction = "W";
    } else if (this.direction === "W") {
      this.direction = "N";
    }
  }

  moveForward() {
    if (this.direction === "N" && this.y > 0) {
      this.y--;
    } else if (this.direction === "E" && this.x < 9) {
      this.x++;
    } else if (this.direction === "S" && this.y < 9) {
      this.y++;
    } else if (this.direction === "W" && this.x > 0) {
      this.x--;
    } else {
      console.log("You cannot pass the border!")
    }
    this.travelLog.push([this.x, this.y]);
  }

  moveBackward() {
    if (this.direction === "N" && this.y < 9) {
      this.y++;
    } else if (this.direction === "E" && this.x > 0) {
      this.x--;
    } else if (this.direction === "S" && this.y > 0) {
      this.y--;
    } else if (this.direction === "W" && this.x < 9) {
      this.x++;
    } else {
      console.log("You cannot pass the border!")
    }
    this.travelLog.push([this.x, this.y]);
  }

  giveCommands(commands) {
    for (let i = 0; i < commands.length; i++){
      let command = commands[i].toLowerCase();
      if (command === "l") {
        this.turnLeft();
      } else if (command === "r") {
        this.turnRight();
      } else if (command === "f") {
        this.moveForward();
      } else if (command === "b") {
        this.moveBackward();
      } else {
        console.log(`${command} is an invalid command! You should only write: L, R, F or B`);
        return;
      } 
     }
  }
}
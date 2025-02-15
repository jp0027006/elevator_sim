// select all the buttons from HTML whoes class is btn
const buttons = document.querySelectorAll(".call-btn");

// select all the svg from HTML whoes class is btn
const elevators = document.querySelectorAll(".elevator");

// queue array for floors
let queue = [];

// defualt place for all elevators
let allElevators = [
  {
    index: 0,
    moving: false,
    floor: 0,
  },
  {
    index: 1,
    moving: false,
    floor: 0,
  },
  {
    index: 2,
    moving: false,
    floor: 0,
  },
  {
    index: 3,
    moving: false,
    floor: 0,
  },
  {
    index: 4,
    moving: false,
    floor: 0,
  },
];


// function to check weather any elevator is already at that floor
function Elevatoristhere(allElevators, calledFloor) {
  return allElevators.some((Elevator) => Elevator.floor === calledFloor);
}

// function to check weather all elevators are moving?
function Elevatormoving(allElevators) {
  return allElevators.every((Elevator) => Elevator.moving == true);
}


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const clickedFloor = parseInt(button.id.split("-")[2]);      
    // checks if all elevators are busy than move clicked floor in the queue
    if (Elevatormoving(allElevators)) {
      queue.push(clickedFloor);
    }
    // check if any elevator is already there and if not than moves elevator
    if (!Elevatoristhere(allElevators, clickedFloor)) {


      button.style.backgroundColor = "red";
      button.textContent = "Waiting";
      button.disabled = true;
      ElevatorStatus(clickedFloor, button);
    }
  });
});


// function to find minimum distance from clicked floor to elevator
function findMinDistance(currentFloor, allElevators) {
  let minDistance  = Infinity;
  let minDistanceIndex  = Infinity;

  for(let i = 0; i < allElevators.length; i++) {
    let difference = Math.abs (currentFloor  - allElevators[i].floor);

    if (difference < minDistance && !allElevators[i].moving){
      minDistance = difference;
      minDistanceIndex = i;
    }
  }
  return [minDistance, minDistanceIndex];
}


// function to find where is the elevator
function ElevatorStatus(clickedFloor, button) {
  let position;
  const nearestelevatordistance = findMinDistance(clickedFloor, allElevators)[0];
  const nearestelevatorindex = findMinDistance(clickedFloor, allElevators)[1];
  // display estimated time of arrival
  if(clickedFloor !== 0 ){
    const Floor = document.getElementById(`floor-${clickedFloor}`);
    const destination = Floor.querySelector(
      `.elevator-space:nth-child(${nearestelevatorindex + 2})`
    );
    if (destination) {
      destination.textContent = `${nearestelevatordistance * 0.5} Second`;
    }
  }
  position = nearestelevatorindex;
  MoveElevator(clickedFloor, position, button);
}

// function to move elevator using clicked floor
function MoveElevator(clickedFloor, position, button) {
  const elevator = elevators[position];
  const currentFloor =  allElevators[position].floor

  // update elevator status
  allElevators[position].floor = clickedFloor;
  allElevators[position].moving = true;

  // change elevator color
  elevator.querySelectorAll("path").forEach((path) => {
    path.setAttribute("fill", "red");
  });

  let duration = Math.abs(clickedFloor - currentFloor) * 0.5;

    elevator.style.transition = `transform ${duration}s linear`;
    elevator.style.transform = `translateY(-${clickedFloor * 135}%)`;

  setTimeout(() => {

    // remove estimated time after elevator arrived
    if(clickedFloor !== 0 ){
      const Floor = document.getElementById(`floor-${clickedFloor}`);
      const destination = Floor.querySelector(
        `.elevator-space:nth-child(${position + 2})`
      );
      if (destination) {
        destination.textContent = "";
      }
    } 
  
    // play sound when elevator arrived
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/4389");
    audio.play();

    // changes elevator color to green
    elevator.querySelectorAll("path").forEach((path) => {
      path.setAttribute("fill", "green");
    });
    button.style.backgroundColor = "white";
    button.textContent = "Arrived";
    button.style.color = "blue";
    button.style.border="2px solid blue";
 
  }, duration * 1000);

  setTimeout(() => {

    allElevators[position].moving = false;

    button.style.backgroundColor = "rgb(2, 142, 2)";
    button.textContent = "Call";
    button.style.color = "white";
    button.style.border="none";

    elevator.querySelectorAll("path").forEach((path) => {
      path.setAttribute("fill", "black");
    });

    // moves elevator to pending queue
    if (queue.length) {

      const clickedFloor = queue.shift()
      const button = document.getElementById(`call-btn-${clickedFloor}`)  
      ElevatorStatus(clickedFloor, button);
    }
  }, duration * 2000);
}


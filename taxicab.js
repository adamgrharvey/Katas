const blocksAway = function(directions) {
  let currentDir = "";
  let taxiPos = [0,0];
  if (directions[0] === 'right') {
    currentDir = 'right';
  } else {
    currentDir = 'up';
  }
  taxiPos = distance(taxiPos, currentDir, directions[1]);
  
  for (let i = 2; i < directions.length; i++) {
    currentDir = newDirection(currentDir, directions[i]);
    i++;
    taxiPos = distance(taxiPos, currentDir, directions[i]);
  }

  let taxiObj = {
    'east': taxiPos[0],
    'north': taxiPos[1]
  };

  return taxiObj;

};

const distance = function(arr, direction, distance) {
  if (direction === 'left') {
    arr[0] = arr[0] - distance;
  } else if (direction === 'up') {
    arr[1] = arr[1] + distance;
  } else if (direction === 'right') {
    arr[0] = arr[0] + distance;
  } else if (direction === 'down') {
    arr[1] = arr[1] - distance;
  }
  return arr;
};

const newDirection = function(prevDir, currTurn) {
  let nextDir = '';
  if (prevDir.toLowerCase() === 'up') {
    if (currTurn.toLowerCase() === 'left') {
      nextDir = 'left';
    }
    if (currTurn.toLowerCase() === 'right') {
      nextDir = 'right';
    }
  } else if (prevDir.toLowerCase() === 'left') {
    if (currTurn.toLowerCase() === 'left') {
      nextDir = 'down';
    }
    if (currTurn.toLowerCase() === 'right') {
      nextDir = 'up';
    }
  } else if (prevDir.toLowerCase() === 'down') {
    if (currTurn.toLowerCase() === 'left') {
      nextDir = 'right';
    }
    if (currTurn.toLowerCase() === 'right') {
      nextDir = 'left';
    }
  } else if (prevDir.toLowerCase() === 'right') {
    if (currTurn.toLowerCase() === 'left') {
      nextDir = 'up';
    }
    if (currTurn.toLowerCase() === 'right') {
      nextDir = 'down';
    }
  }
  return nextDir;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
// generate magic squares! (n % 2 === 1)

function oddMagic(n) {
  const square = [];
  for (let i = 0; i < n; i++) {
    square.push(new Array(n).fill(0));
  }

  let row = Math.floor(n / 2);
  let col = Math.floor(n / 2) + 1;

  for (let k = 0; k < n * n; k++) {
    if (k % n === 0) {
      row = (row + 1) % n;
      col = (col + (n - 1)) % n;
    }
    square[row][col] = k + 1;

    row = (row + 1) % n;
    col = (col + 1) % n;
  }

  console.log(square);
  return square;
}

oddMagic(4);

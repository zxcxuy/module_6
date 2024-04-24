const poleArr = [["x", "o", "x"],["o", "x", "o"],["x", "o", "x"]];
let str = "";
for(let i = 0; i < 3; i++) {
  for(let j = 0; j < 3; j++){
    str += `${poleArr[i][j]} `;
  }
  str += "\n";
}
console.log(str)
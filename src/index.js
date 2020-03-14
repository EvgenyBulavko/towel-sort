
// You should implement your task here.

module.exports = function towelSort(matrix) {

  

  let massA = [];
if (Array.isArray(matrix))
  for (let i = 0; i < matrix.length; i++) {
    let z = matrix[i].length-1;
    for (let j = 0; j < matrix[i].length; j++) {
     
      
      if (i % 2 == 0) {massA.push(matrix[i][j]); }
      else { massA.push(matrix[i][z]);z--; }
      
    }
  


  
}
  return massA;

}

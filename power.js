


const exp = (x, n, z) => n > 0 ? exp(x, n-1, z*x) : z

console.log(exp(3, 4, 1)); // => 81 ----- // z param is constant = 1 and mendatory

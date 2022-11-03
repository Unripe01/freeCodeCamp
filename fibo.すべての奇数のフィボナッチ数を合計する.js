function sumFibs(num) {
  if (num < 1 ) return []

  //フィボナッチの数列を作る
  let fiboArr = []
  let i = 1
  fiboArr.push(i)
  while( i <= num ) {
    fiboArr.push(i)
    i = fiboArr[fiboArr.length-1] + fiboArr[fiboArr.length-2]
  }

  //偶数除外
  const odd = fiboArr.filter( item => item % 2 === 1)
  console.log(odd)

  //sum
  const sum = odd.reduce( (a,b) => a+b)
  console.log(sum)
  return sum;
}

sumFibs(4);
// すべての素数を合計する
// 素数とは、1 より大きい整数で、約数として 1 とそれ自体の 2 つのみを持つものです。 たとえば、2 は 1 と 2 でしか割り切れないので素数です。 一方、4 は 1、2、4 で割り切れるので素数ではありません。

// num 以下のすべての素数の合計を返すように sumPrimes を書き換えてください。

/*
概要：素数判定処理
引数：num 正の整数
戻り値：true（素数の時）、false（合成数）
*/
//TODO:DP使って計算結果入れる箱作ったほうが良い・・・
function primejudge(num) {
  //1 は素数でないので false を返す
  if (num == 1) {
    return false; 
  //2 は素数なので true を返す
  } else if (num == 2) {
    return true;
  } else {
    for (let zi = 2; i < num; i++) {
      //割り切れたら合成数なのでfalse
      if (num % i == 0) {
        return false;
      } //割り切れないとき素数なのでtrue
      if (i + 1 == num) {
        return true;
      }
    }
  }
}

function sumPrimes(num) {
  //素数数える
  let prime = []
  for (let index = 1; index <= num; index++) {
    // TODO:DP    
    if ( primejudge(index) ) {
      prime.push(index)
    }  
  }

  //sum
  const sum = prime.reduce((a,b)=> a+b)
  return sum;
}

const sum = sumPrimes(10);
console.log(sum)

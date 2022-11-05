// 最小公倍数
// 指定されたパラメーターに対して、両方のパラメーターで割り切れるだけでなく、これらのパラメーターの範囲内にあるすべての連続する数でも割り切れる、最小公倍数を求めてください。

// 範囲は 2 つの数値の配列になりますが、必ずしも数値順とは限りません。

// たとえば、1 と 3 が与えられた場合は、1 と 3 の両方で割り切れ、かつ 1 と 3 の間にあるすべての数でも割り切れる最小公倍数を求めてください。 その場合の答えは 6 になります。

function smallestCommons(arr) {
  arr.sort((a,b) => a-b)
  const min = arr[0]
  const max = arr[1]
  const length = max - min + 1
  const calcTarget = Array.from({length}, (_, i) => i + min);// (length:7,min:2) [2, 3, 4, 5, 6, 7, 8]
  // console.log(calcTarget);

  //tobe(x % arr[x] === 0)
  let i = max
  while(true) {
    if (calcTarget.every(target=> i % target === 0)) break;
    i += ( i % max === 0) ? max : min //どうせ割り切れない数字はスキップして加算
  }
  return i;
}

console.log(smallestCommons([23, 18]));






  
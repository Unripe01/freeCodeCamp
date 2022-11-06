// ローラーで押し潰せ！
// ネストされた配列を平坦化してください。 さまざまなレベルのネストを考慮する必要があります。
// 解答には Array.prototype.flat() メソッドや Array.prototype.flatMap() メソッドを使用しないでください。

function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
      console.log(...steamrollArray(arr[i]))
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

const a = steamrollArray([1, [2], [3, [[4]]]]);
console.log(a);

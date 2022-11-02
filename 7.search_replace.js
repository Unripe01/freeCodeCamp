function myReplace(str, before, after) {
  const big = /^[A-Z]/.test(before)
  const small = /^[a-z]/.test(before)
  let afterNew = after
  //１文字目大文字判定(大文字バン)
  if (big) {
    afterNew = after[0].toUpperCase() + after.substring(1)
  }
  //１文字目大文字判定(子文字バン)
  if (small) {
    afterNew = after[0].toLowerCase() + after.substring(1)
  }

  console.log(str.replace(before,afterNew))
  return str.replace(before,afterNew);
}

myReplace("I think we should look up there", "up", "Down")
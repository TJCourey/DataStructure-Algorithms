// takes currency minus $
// return array with dollars and cents as separate positions in array
// if currency improperly formatted (only num or .) return [0, 0]
function currencySplit(cur) {
  const totalArr = [];
  let splitCur = cur.split(".");
  let dollars = splitCur[0];
  dollars = Number(
    dollars
      .split("")
      .filter((char) => char !== ",")
      .join("")
  );
  const cents = Number(splitCur[1] || 0);
  if (isNaN(dollars) || isNaN(cents)) {
    totalArr.push(0, 0);
  } else {
    totalArr.push(dollars, cents);
  }
  return totalArr;
}

module.exports = currencySplit;

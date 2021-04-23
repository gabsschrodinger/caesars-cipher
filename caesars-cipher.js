function rot13(str) {
  let firstArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];
  let secondArr = [
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      if (firstArr.indexOf(str[i]) >= 0) {
        newStr += secondArr[firstArr.indexOf(str[i])];
      } else {
        newStr += firstArr[secondArr.indexOf(str[i])];
      }
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

const word1 = "Довод";
const word2 = "Сантимент";
const reverse1 = word1.split('').reverse().join('').toLowerCase();
const reverse2 = word2.split('').reverse().join('').toLowerCase();
if (word1.toLowerCase() === reverse1) {
  console.log(`Слово ${word1} является палиндромом`)
}
else {
  console.log(`Слово ${word1} не является палиндромом`)
}
if (word2.toLowerCase() === reverse2) {
  console.log(`Слово ${word2} является палиндромом`)
}
else {
  console.log(`Слово ${word2} не является палиндромом`)
}

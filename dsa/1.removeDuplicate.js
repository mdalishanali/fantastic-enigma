// 1 find duplicate and same values in two array
// var fullWordList = ['1','2','3','4','5'];
// var wordsToRemove = ['1','2','3'];

const findDuplicate = (arr1, arr2) => {
  let duplicate = [];
  let obj = {};
  //  dumbing all the array elem in obj
  arr1.forEach((item) => {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  });

  //   looping on second array and checking that if the object key map with array item  it means it is duplicate
  arr2.forEach((item) => {
    if (obj[item]) {
      duplicate.push(item);
    }
  });

  return duplicate;
};

const fullWordList = ["1", "2", "3", "4", "5"];
const wordsToRemove = ["1", "2", "3"];

let res = findDuplicate(fullWordList, wordsToRemove);
console.log("res: ", res); // O/P:-  [ '1', '2', '3' ]

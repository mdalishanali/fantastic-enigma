// 5) function average(a, b) {
//         return a + b / 2;
//         }
//         console.log(average(2, 1));

function average(a, b) {
  // js follow BODMAS rule
  // so, what does happened first it divide the b with 2 then it with the that's why it is coming with 2.5
  // we can over come with this (a+b)/2
  return (a + b) / 2;
}
console.log(average(2, 1)); //  after adding paranthesis (1.5)

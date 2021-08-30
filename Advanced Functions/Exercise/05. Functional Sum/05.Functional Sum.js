function add(num) {
   let sum = 0;
    sum +=  num;

   function adding(number1) {
    sum += number1;
    return adding;
   }

   adding.toString = () => {
    return sum;
   };
   return adding;
}

console.log(add(1)(6)(-3));
// function solution() {
//     this.state = "";

//     this.append = function(str) {
//         this.state += str;
//     };
//     this.removeStart = function(num) {
//         this.state = this.state.substr(num);
//     };

//     this.removeEnd = function(num){
//         this.state = this.state.slice(0, -num);
//     };

//     this.print = function(){
//         console.log(this.state);
//     };
// }

function solution() {
    let state = "";

    // Example
    // function removeStart(num) {
    //     state = state.substr(num);
    // }

    return {
        append: (str) => state += str,
        removeStart: (num) => state = state.substr(num),
        removeEnd: (num) => state = state.slice(0, -num),
        print: () => console.log(state),
    };
}

let firstZeroTest = new solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
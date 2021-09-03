class List {
    constructor() {
        this.numbers = [];
        this.size = this.numbers.length;
    }
    
    add(element) {
        this.numbers.push(element);
        this.size = this.numbers.length;
        this.numbers.sort((a, b) => a - b);
    }

    remove(index) {
        if (index > this.numbers.length ||index < 0) {
            return;
        }
        this.numbers.splice(index, 1);
        this.numbers.sort((a, b) => a - b);
        this.size = this.numbers.length;
    }

    get(index){
        if (index > this.numbers.length ||index < 0) {
            return;
        }
        return this.numbers[index];
    }
}

let list = new List();
list.add(5);
list.add(3);
list.remove(0);
console.log(list.get(0)); 

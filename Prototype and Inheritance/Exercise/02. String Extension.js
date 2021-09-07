(function solve() {
    String.prototype.ensureStart = function (str) {
        if(!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if(!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function (str) {
        if (str === "") {
            return true;
        } else {
            return false;
        }  
    };

    String.prototype.truncate = function(n) {
        
    }
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
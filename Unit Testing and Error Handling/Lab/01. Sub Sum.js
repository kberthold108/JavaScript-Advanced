

function solution(array, startIndex, endIndex) {
    let num;
    if (!Array.isArray(array)) {
        console.log("not an array");
        return NaN;
    }
    if(array.length === 0) {
        return num = 0;
    }
   
    if (startIndex < 0) {
        startIndex = 0;
    }
    
    if (endIndex > array.length) {
        endIndex = array.length;
    }

    const sliced = array.slice(startIndex, endIndex + 1);
    
    num = sliced.reduce((acc, curr) => Number(acc) + Number(curr));
    
    return num 
}


solution([], 1, 2);
//solution("not and array", 1, 2)
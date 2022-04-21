var arr = [1, 2, 3, 4, 5];

// [5, 1, 2, 3, 4]
// deque arr[i];
//push(dequed(element))
// for(var i = 0; i < arr.length-1; i++){
//     var removed = arr.unshift(arr[i]);
//     arr.push(removed)
// }
var temp = arr.pop();
arr.unshift(temp)
console.log(arr);
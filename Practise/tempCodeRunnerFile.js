
function binarySearch(array, num){
  var start = 0;
  var end = array.length - 1;
  var mid = Math.floor((start+end)/2);
  while(mid !== num) {
      if(num < mid) {
          end = mid - 1;
          mid = Math.floor((start+end/2));
      } else {
          start = mid + 1;
          mid = Math.floor((start+end/2));
      }
      if (start === end) {
          return -1
      }
     
  }
  
  return mid
  
// add whatever parameters you deem necessary - good luck!
}

console.log(binarySearch([1,2,3,6,8,0,12,45,78], 8))
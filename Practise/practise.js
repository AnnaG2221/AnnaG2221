var email = document.getElementById('email')
var confirm = document.getElementById('confirm')
var password = document.getElementById('password')
var alert = document.getElementById('alert')


var number = /^\d+$/
var lowerCase = /^[a-z]+$/
var upperCase = /^[A-Z]+$/
var normal = /^\w+$/

password.oninput = function(e) {
  var value  = e.target.value
if (number.test(value) || lowerCase.test(value) || upperCase.test(value)){
alert.innerHTML='low security'
alert.style.color = 'red'

} else if(!normal.test(value)){
console.log('hight')
alert.innerHTML = 'high security'
alert.style.color = 'green'
} else {
alert.innerHTML = 'middle security'
alert.style.color = 'yellow'
}
}

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
      console.log('run')
      break


  }

  return mid

// add whatever parameters you deem necessary - good luck!
}

console.log(binarySearch([1,2,3,6,8,0,12,45,78], 8))


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


//get string length

function stringLength(string) {
  return string.length
}

console.log(stringLength('Anna'))

// connenct string
function connectString(str1, str2) {
  return str1+str2
}

// Create a function named difference which takes two integers as arguments and returns the absolute value of the difference.
function difference (n1, n2) {
  return Math.abs(n1 - n2);
}

console.log(difference(5,7))

//Create a function named convertHexadecimal which takes as an argument a string representing a hexadecimal integer (base-16) and returns a decimal integer (base-10).
function toDecimal (str) {
var result = 0;
for (var i =0; i< str.length; i++){
  let num
  if (str.charCodeAt(i)  <= 57 && str.charCodeAt(i)  >= 48){
    num = str[i].charCodeAt(0) - 48;

  }
  if(str.charCodeAt(i) >= 65 && str.charCodeAt(i)  <= 70) {
    num = str[i].charCodeAt(0) - 55;
  }
  result = result + num * Math.pow(16, str.length - 1 - i)

}
return result;
}

console.log(toDecimal('AAA'))

// Create a function named onlyTruthy which takes as an argument an array of values and returns an array consisting of only those values which are truthy

function onlyTruthy (arr) {
  const result = [];
  for(var i of arr) {
    if (i) {
      result.push(i);
    }
  }
  return result
}

console.log(onlyTruthy ([0,true, true,false,false, undefined, null, 6, 8, 'a']))


// Create a function named removeVowels which takes a string as an argument and returns that string with all vowels removed.
function removeVowels (str){
  return str.replace(/[aeiou]/ig, '')
}
console.log(removeVowels('you Are the bEst i have ever met!'))


// Created a function named toArray which takes an unspecified number of arguments and returns an array with those arguments as values.\
function toArray() {
 return [...arguments]
}
console.log(toArray(1,2,3,'a')) //[ 1, 2, 3, 'a' ]

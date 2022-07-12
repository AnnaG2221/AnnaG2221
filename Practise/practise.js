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

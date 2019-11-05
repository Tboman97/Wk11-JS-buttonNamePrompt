const button = document.querySelector('button');

button.onclick = function() {
  let fullname = prompt('What is your first and last name?');
  alert('Hello ' + fullname + ', nice to see you!');
}
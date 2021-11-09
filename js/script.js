let email = document.querySelector('.sub-email');
let password = document.querySelector('.sub-password');

let button = document.getElementById("myBtn");

button.addEventListener("click", function (){
  let div = document.createElement('div');
  div.className = "result-text ";
  div.innerHTML = "<strong>Ваш email: </strong> " + email.value + ", " + "<strong>ваш пароль: </strong>" + password.value;

  document.body.append(div);

  localStorage.setItem('email', email.value);
  localStorage.setItem('password', password.value);
});


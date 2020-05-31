const form = document.querySelector ('form');
var name_and_password;
var numOne = 0;
const ul = $("ul");
const button = document.getElementById('login');
const button_reg = document.getElementById("reg");
const input = document.getElementById ('loginandpassword');
let itemsArray = localStorage.getItem ('users') ? JSON.parse (localStorage.getItem ('users')): []
localStorage.setItem ('users', JSON.stringify (itemsArray))
const data = JSON.parse (localStorage.getItem ('users'))
var num;
var num_2 = 0;
const liMaker = text => {
  const li = document.createElement('li');
  for (var i = 0; i < text.length; i++) {
    if ((text[i] == "<" && text[i + 1] == "b" && text[i + 2] == "r" && text[i + 3] == ">")
    || (text[i] == "<" && text[i + 1] == "s" && text[i + 2] == "p" && text[i + 3] == ">")) {
      num = i;
      break;
    }
  }
  num_2++;
  var name_str = text.slice(0, num);
  li.id = num_2;
  li.innerHTML = "<span class='name'>" + name_str + "</span>" + text.slice(num, text.length);
  ul.append(li);
}
button.addEventListener('click', function () {
  for (var i = 0; i < num_2 + 1; i++) {
    if (input.value == $("#" + i).text() && input.value !== "" && input.value !== " ") {
      window.location = "file:///C:/Users/Chernivchan/Documents/Chicken.com.ua/profile.html";
    }
  }
})
button_reg.addEventListener("click", function (e) {
  e.preventDefault();
  numOne++;
  itemsArray.push(input.value);
  localStorage.setItem('users', JSON.stringify(itemsArray));
  liMaker (input.value);
  input.value = '';
})
data.forEach (item => {
  liMaker (item)
})

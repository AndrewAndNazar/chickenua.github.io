var name_and_password;
var numOne = 0;
const ul = $("ul");
const button = document.getElementById('to-profile');
const button_reg = document.getElementById("reg-profile");
const input = document.getElementById ('bd');
let itemsArray = localStorage.getItem ('pass') ? JSON.parse (localStorage.getItem ('pass')): []
localStorage.setItem ('pass', JSON.stringify (itemsArray))
const data = JSON.parse (localStorage.getItem ('pass'))
var num;
var num_2 = 0;
const liMaker = text => {
  const li = document.createElement('li');
  li.id = text;
  li.innerHTML = "<span class='name'>" + text + "</span>";
  ul.append(li);
}
button.addEventListener('click', function () {
  for (var i = 0; i < num_2 + 1; i++) {
    if (input.value == $("#" + i).text() && input.value !== "" && input.value !== " ") {
      $("#all-keys").html($("#" + input.value).html());
    }
  }
})
button_reg.addEventListener("click", function (e) {
  e.preventDefault();
  numOne++;
  let items = localStorage.getItem (input.value) ? JSON.parse (localStorage.getItem (input.value)): []
  localStorage.setItem (input.value, JSON.stringify (items))
  const data = JSON.parse (localStorage.getItem (input.value))
  itemsArray.push(input.value);
  localStorage.setItem('pass', JSON.stringify(itemsArray));
  liMaker (input.value);
})
data.forEach (item => {
  liMaker (item)
})
